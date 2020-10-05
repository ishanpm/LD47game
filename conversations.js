class ConversationManager {
  constructor() {
    this.data = null;
    this.curConversation = null;
    this.convStep = 0;
    this.lastBubble = null;
    this.delay = 0;
  }
  
  playConversation(id) {
    this.curConversation = this.data[id];
    if (this.curConversation == null) {
      console.error(`Unknown conversation ${id}`);
      return;
    } 
    
    if (typeof(this.curConversation) === "function") {
      let computed = this.curConversation();
      this.curConversation = this.data[computed];
    }

    this.delay = 1;
    this.convStep = 0;
    this.advanceConversation();
  }
  
  advanceConversation() {
    // Stop if at end
    if (this.convStep >= this.curConversation.length) {
      if (this.lastBubble) {
        this.lastBubble.hide();
      }
      this.curConversation = null;
      return;
    }
    
    let step = this.curConversation[this.convStep];
    let stepActive = true;
    let stepWait = false;

    // Determine if step is active
    if (step.ifTemp) {
      stepActive = stepActive && tempFlags[step.ifTemp] === step.eq
    } else if (step.ifPerm) {
      stepActive = stepActive && tempFlags[step.ifPerm] === step.eq
    }

    if (stepActive) {
      let character = sprites[step.who];
      let bubble = null;
      let stepText = null;
      let value = step.val ? step.val : null;
      
      // Say things
      if (step.say) {
        bubble = character.bubble;
        stepText = step.say;
      } else if (step.narrate) {
        bubble = sprites.thoughtBubble;
        stepText = step.narrate;
      }

      if (this.lastBubble && (bubble !== this.lastBubble)) {
        this.lastBubble.hide();
      }

      this.lastBubble = bubble;

      if (bubble) {
        bubble.say(stepText);
        stepWait = true;
      }
      
      // Set animation
      if (step.anim) {
        character.startAnimation(step.anim);
      }

      // Set flags
      if (step.tempFlag) {
        tempFlags[step.tempFlag] = step.val;
      } else if (step.permFlag) {
        permFlags[step.tempFlag] = step.val;
      }
    }
    
    this.convStep++;
    
    if (!stepWait) {
      // Do another step
      this.advanceConversation();
    }
  }
  
  tick() {
    if (this.delay > 0) {
      this.delay --;
    } else {
      if (this.curConversation !== null && (input.buttons.accept.pressed || input.buttons.up.pressed)) {
        this.advanceConversation();
      }
    }
  }
  
  draw() {
    // eh
  }
}