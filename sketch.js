let SCREENW = 960;
let SCREENH = 600;

/** @type {Object.<string, Scene>} */
let scenes = {};
/** @type {Object.<string, Sprite>} */
let sprites = {};
/** @type {Scene} */
let currentScene;
let currentDaytime = 0;

let permFlags = {};
let tempFlags = {};

let inTransition = false;
let nextDaytime = null;
/** @type {?Scene} */
let nextScene = null;
/** @type {number} */
let nextScenePlayerX = 0;
/** @type {boolean} */
let nextScenePlayerFlip = false;
let fadeout = 0;

/** @type {InputManager} */
let input;
/** @type {ConversationManager} */
let conversation;

/**
 * Utility function for setting default values
 * @param {any} value returned if not undefined
 * @param {any} defaultValue returned if `value` is undefined
 */
function ifUndef(value, defaultValue) {
  return (value === undefined ? defaultValue : value);
}

class Scene {
  constructor(config) {
    this.background = ifUndef(config.background, null);
    this.backgrounds = ifUndef(config.backgrounds, null);
    this.sprites = [];
    this.toRemove = [];
    this.spritesDirty = true;
    
    this.floor = config.floor // Floor Y position
    this.xMin = ifUndef(config.xMin, -Infinity) // Player x min
    this.xMax = ifUndef(config.xMax, Infinity) // Player x max
    this.backgroundScale = ifUndef(config.scale, 1);
    this.camxMax = ifUndef(config.camxMax, 0);
    this.camx = 0;
    this.camy = 0;
    this.focus = null;
    this.camSpeed = 0.1;
  }

  updateBackground() {
    if (this.backgrounds) {
      this.background = this.backgrounds[currentDaytime];
    }
  }
  
  worldToLocal([x, y]) {
    return [x + this.camx, y + this.camy];
  }
  
  addSprite(spr) {
    this.sprites.push(spr);
    this.invalidateSpriteOrder();
  }
  
  addSprites(sprs) {
    for (let spr of sprs) spr.setScene(this);
  }
  
  removeSprite(spr) {
    let idx = this.sprites.indexOf(spr);
    
    if (idx > -1) {
      this.toRemove.push(idx);
    } else {
      console.warn("Tried to remove sprite not in scene:", spr);
    }
  }

  removeAllSprites() {
    this.sprites = [];
    this.toRemove = [];
  }
  
  invalidateSpriteOrder() {
    this.spritesDirty = true;
  }
  
  onShow() {
    if (this.focus) {
      this.camx = constrain(this.focus.x - SCREENW/2, 0, this.camxMax - SCREENW);
    }
  }
  
  onHide() {
    // Tick one last time, y'know, for old times sake
    this.tick();
  }
  
  tick() {
    // Remove sprites if necessary
    if (this.toRemove.length > 0) {
      let removeArr = Array(this.sprites.length);
      for (let idx of this.toRemove) {
        removeArr[idx] = true;
      }
      
      this.sprites = this.sprites.filter((e,i) => !removeArr[i]);
      this.toRemove = [];
    }
    
    // Re-sort sprites if dirty
    if (this.spritesDirty) {
      this.sprites.sort((a,b) => a.zOrder !== b.zOrder ? (a.zOrder < b.zOrder ? -1 : 1) : 0);
      this.spritesDirty = true;
    }
    
    // Move camera
    if (this.focus) {
      let tx = this.focus.x - SCREENW/2;
      tx = constrain(tx, 0, this.camxMax - SCREENW);
      
      this.camx += (tx - this.camx) * this.camSpeed;
      //this.camx = constrain(this.camx, 0, this.camxMax - SCREENW);
    }
    
    
    // Tick sprites
    for (let spr of this.sprites) {
      spr.tick();
    }
  }
  
  draw() {
    push();
    
    translate(-this.camx, -this.camy);
    
    // Draw background
    if (this.background) {
      push();
      scale(this.backgroundScale);
      image(this.background, 0, 0);
      pop();
    }
    
    // Draw sprites
    for (let spr of this.sprites) {
      spr.draw();
    }
    
    pop();
  }
}

class Sprite {
  constructor(config) {
    this.scene = null;
    this.frames = config.frames || {};
    this.animations = config.animations || {};
    this.curFrame = "default";
    this.curVariant = null;
    this.curAnimation = null;
    this.animationProgress = 0;
    this.zOrder = config.zOrder || 0;

    /** @type{SpeechBubble} */
    this.bubble = null;
    /** @type{SpeechBubble} */
    this.thoughtBubble = null;
    /** @type{Interactible} */
    this.interactible = null;
    
    this.invisible = config.invisible || false;
    this.opacity = 255;
    this.imageScale = config.scale || 0.5;
    this.flipx = ifUndef(config.flipX, false);
    
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.hAlign = ifUndef(config.hAlign, 0.5);
    this.vAlign = ifUndef(config.vAlign, 1);
  }
  
  startAnimation(id) {
    this.curAnimation = null;
    
    if (this.animations[id]) {
      this.curAnimation = this.animations[id];
      
      this.animationProgress = 0;
      this.curFrame = this.curAnimation.ids[0];
    } else if (this.frames[id]) {
      this.curFrame = id;
    } else {
      console.error(`Unknown animation ${id} in sprite`, this);
    }
  }
  
  tick() {
    // Update anmation
    if (this.curAnimation !== null && !this.invisible) {
      let anim = this.curAnimation;
      let period = anim.period || 1;
      let idx = Math.floor((this.animationProgress / period) * anim.ids.length);
      idx = constrain(idx, 0, anim.ids.length-1);
      
      this.curFrame = anim.ids[idx];
      
      this.animationProgress += 1;
      
      if (this.animationProgress >= anim.period) {
        if (anim.loop) {
          this.animationProgress -= anim.period;
        } else {
          this.curAnimation = null;
        }
      }
    }
  }
  
  draw() {
    if (this.invisible) return;
    
    push();

    let img;
    if (this.curVariant === null) {
      img = this.frames[this.curFrame];
    } else {
      img = this.frames[`${this.curFrame}_${this.curVariant}`];
    }
    
    if (this.opacity <= 254) {
      tint(255, this.opacity)
    }
    
    if (img) {
      translate(this.x, this.y);
      scale(this.imageScale);
      if (this.flipx) {
        scale(-1,1);
      }
      image(img, -img.width * this.hAlign, -img.height * this.vAlign);
    } else {
      noFill();
      stroke(255,0,0);
      rect(this.x,this.y, 50,50);
    }
    pop();
  }
  
  setScene(newScene) {
    if (this.scene) this.scene.removeSprite(this);
    if (newScene) newScene.addSprite(this);

    this.scene = newScene;
    
    if (this.bubble) {
      this.bubble.parent = this; // Good a time as any
      this.bubble.setScene(newScene);
    }
    if (this.thoughtBubble) {
      this.thoughtBubble.parent = this; // Good a time as any
      this.thoughtBubble.setScene(newScene);
    }
    if (this.interactible) {
      this.interactible.parent = this;
      this.interactible.setScene(newScene)
    }
  }
}

class Interactible extends Sprite {
  constructor(config) {
    super(config);
    
    this.parent = null; // Set when parent's scene is changed
    this.radius = config.radius || 100;

    this.targetScene = config.targetScene || null;
    this.targetX = config.targetX;
    this.targetFacing = config.targetFacing;
    this.targetConversation = config.targetConversation || null;

    this.times = ifUndef(config.times, null)
    this.inRange = false;
    this.opacity = 0;
    this.revealSpeed = 20;

    this.zOrder = 100;
  }
  
  tick() {
    super.tick();

    if (this.parent) this.x = this.parent.x;
    
    let player = sprites.player;
    this.inRange = (player.scene === this.scene &&
                    (abs(player.x - this.x) < this.radius) &&
                    !(inTransition || conversation.curConversation));
    
    if (this.times) {
      this.inRange = this.inRange && this.times[currentDaytime];
    }

    this.opacity = constrain(this.opacity + (this.inRange ? this.revealSpeed : -this.revealSpeed), 0, 255);
    
    if (this.inRange && (input.buttons.accept.pressed || input.buttons.up.pressed) && !conversation.curConversation) {
      this.onInteract();
    }
  }
  
  onInteract() {
    if (this.targetScene) {
      switchScene(this.targetScene, this.targetX, this.targetFacing);
    } else if (this.targetConversation) {
      conversation.playConversation(this.targetConversation);
    }
  }
}

class SpeechBubble extends Sprite {
  constructor(config) {
    super(config);
    
    this.parent = config.parent;
    this.invisible = true;
    this.text = "foo";
    this.choices = null;
    this.selection = 0;

    this.offsX = ifUndef(config.offsX, 0)
    this.offsY = ifUndef(config.offsY, -250)
    
    this.y = config.y || 50;
    this.width = 250;
    this.height = 100;
    this.padding = 10;
    this.textSize = 16;
    this.lineHeight = 18;
    this.isThoughtBubble = ifUndef(config.isThoughtBubble, false);
    this.textOpacity = 0;
    this.textSpeed = 20;

    this.zOrder = 101;
  }

  showChoice(choices) {
    this.textOpacity = 255;
    this.choices = choices;
    this.selection = 0;
    this.invisible = false;
  }

  say(val) {
    this.textOpacity = 0;
    this.choices = null;
    this.text = val;
    this.invisible = false;
  }

  hide() {
    this.choices = null;
    this.text = "";
    this.invisible = true;
  }
  
  tick() {
    if (this.parent) {
      if (this.isThoughtBubble) {
        this.x = this.scene.camx + SCREENW/2;
      } else {
        this.x = this.parent.x + this.offsX;
        this.y = this.parent.y + this.offsY;
      }
    }

    if (!this.invisible && this.choices) {
      if (input.buttons.down.pressed) {
        this.selection += 1;
        if (this.selection >= this.choices.length) this.selection = 0;
      }
      if (input.buttons.up.pressed) {
        this.selection -= 1;
        if (this.selection < 0) this.selection = this.choices.length - 1;
      }
    }

    this.textOpacity = constrain(this.textOpacity + this.textSpeed, 0, 255)

    super.tick();
  }
  
  draw() {
    if (!this.invisible) {
      push();
      
      let x = this.x - this.width/2;
      let y = this.y - this.height;
      
      if (this.isThoughtBubble) {
        fill(0);
        stroke(255);
      } else {
        fill(245);
        stroke(0);
      }
      strokeWeight(3);
      rect(x, y, this.width, this.height);
      
      if (this.choices) {
        let centerY = this.y - this.height/2;
        let totalHeight = this.lineHeight * this.choices.length;
        let firstHeight = centerY - totalHeight/2;
        
        // Draw selection box
        fill(0, 128, 255, 100);
        noStroke();
        rect(x, firstHeight + this.lineHeight*this.selection, this.width, this.lineHeight)

        if (this.isThoughtBubble) {
          fill(255, this.textOpacity);
        } else {
          fill(0, this.textOpacity);
        }
        textAlign(CENTER, CENTER);
        textSize(this.textSize);
        
        for (let i=0; i<this.choices.length; i++) {
          let curY = firstHeight + this.lineHeight*i;
          text(this.choices[i], x, curY, this.width, this.lineHeight);
        }
      } else {
        if (this.isThoughtBubble) {
          fill(255, this.textOpacity);
        } else {
          fill(0, this.textOpacity);
        }
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(this.textSize);
        text(this.text, x + this.padding, y, this.width - this.padding*2, this.height);
      }
      
      pop();
    }
    
    //super.draw();
  }
}

class Character extends Sprite {
  constructor(config) {
    super(config);
    
    this.walkFrames = config.walkFrames;
    this.dx = 0;
    this.targetX = null;
    this.walking = false;
    this.speed = ifUndef(config.speed, 7);

  }
  
  tick() {
    if (this.targetX !== null) {
      this.dx = constrain(this.targetX - this.x, -this.speed, this.speed);
    } else {
      this.dx = 0;
    }

    // Start/end walk cycle
    if (this.dx !== 0 && !this.walking) {
      this.walking = true;
      this.startAnimation("walk");
    } else if (this.dx === 0 && this.walking) {
      this.walking = false;
      this.startAnimation("default");
    }
    
    // Advance walk cycle
    if (this.walking) {
      this.flipx = (this.dx > 0);
    }
    
    this.x += this.dx;
    
    super.tick();
  }
}

class Player extends Character {
  constructor(config) {
    super(config);
  }
  
  tick() {
    if (this.scene) {
      this.targetX = null;

      if (!(inTransition || conversation.curConversation)) {
        if (input.buttons.left.held ) this.targetX = this.scene.xMin;
        if (input.buttons.right.held) this.targetX = this.scene.xMax;
      }
    }
    
    super.tick();
  }
}

function preload() {
  input = new InputManager();
  conversation = new ConversationManager();
  
  preloadSprites();
  preloadScenes();
}

function setup() {
  // Aspect: 1920 x 1200
  createCanvas(SCREENW,SCREENH);
  pixelDensity(window.devicePixelRatio);
  
  setupConversations();
  setupScenes(0);

  setScene("office", 849, false);
  sprites.dottie.setScene(scenes.office);
  sprites.dottie.x = -100;
  sprites.dottie.y = scenes.office.floor;

  conversation.playConversation("intro")
  
  fadeout = 255;
}

function draw() {
  input.tick();
  
  background(245);
  
  if (inTransition) {
    fadeout = constrain(fadeout+10, 0, 255);
    
    if (fadeout === 255) {
      if (nextDaytime !== null) {
        setDaytime(nextDaytime);
      }
      if (nextScene !== null) {
        setScene(nextScene, nextScenePlayerX, nextScenePlayerFacing);
      }
      nextDaytime = null;
      nextScene = null;
      inTransition = false;
    }
  } else {
    fadeout = constrain(fadeout-10, 0, 255);
  }
  
  
  if (currentScene) {
    currentScene.tick();
    currentScene.draw();
  }
  
  conversation.tick();
  
  // Fade to black
  if (fadeout > 0) {
    background(0, fadeout)
  }
}

function switchScene(target, playerX, playerFacing) {
  inTransition = true;
  nextScene = target;
  nextScenePlayerX = playerX;
  nextScenePlayerFacing = playerFacing;
}

function switchDayime(nextTime) {
  inTransition = true;
  nextDaytime = nextTime;
}

function setDaytime(nextTime) {
  if (nextTime === 0) {
    // Reset the clock
    tempFlags = {};
    sprites.player.curVariant = null;
  } else {
    // don't do that i guess
  }
  currentDaytime = nextTime;
  setupScenes(currentDaytime);
}

function setScene(target, playerX, playerFacing) {
  let player = sprites.player;
  let prevScene = currentScene;
  
  currentScene = scenes[target];
  currentScene.focus = player;
  
  player.setScene(currentScene);
  player.x = playerX;
  player.flipx = playerFacing;
  player.y = currentScene.floor;

  currentScene.updateBackground();
  
  if (prevScene) {
    prevScene.onHide();
  }
  currentScene.onShow();

  // Special conversations when entering town
  if (target === "town") {
    conversation.playConversation("enterTown");
  }
}

function mouseClicked() {
  // Debug mouse position
  if (currentScene) {
    console.log(currentScene.worldToLocal([mouseX, mouseY]))
  }
}