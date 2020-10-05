function preloadSprites() {
  sprites.player = new Player({
    frames: {
      "default": loadImage("assets/still/Dunnet_Standing.png"),
      "walk0":   loadImage("assets/anim/Dunnet Walk Cycle_0000.png"),
      "walk1":   loadImage("assets/anim/Dunnet Walk Cycle_0001.png"),
      "walk2":   loadImage("assets/anim/Dunnet Walk Cycle_0002.png"),
      "walk3":   loadImage("assets/anim/Dunnet Walk Cycle_0003.png"),
      "walk4":   loadImage("assets/anim/Dunnet Walk Cycle_0004.png"),
      "walk5":   loadImage("assets/anim/Dunnet Walk Cycle_0005.png"),
      "walk6":   loadImage("assets/anim/Dunnet Walk Cycle_0006.png"),
      "walk7":   loadImage("assets/anim/Dunnet Walk Cycle_0007.png")
    },
    animations: {
      "walk": {
        ids: ["walk0", "walk1", "walk2", "walk3", "walk4", "walk5", "walk6", "walk7"],
        period: 50,
        loop: true
      }
    },
    scale: 0.5,
    speed: 7,
    zOrder: 10
  });

  sprites.player.bubble = new SpeechBubble({offsY: -261});

  sprites.dottie = new Character({
    frames: {
      "default": loadImage("assets/anim/Dottie_Walk_0002.png"),
      "walk0":   loadImage("assets/anim/Dottie_Walk_0000.png"),
      "walk1":   loadImage("assets/anim/Dottie_Walk_0001.png"),
      "walk2":   loadImage("assets/anim/Dottie_Walk_0002.png"),
      "walk3":   loadImage("assets/anim/Dottie_Walk_0003.png"),
      "walk4":   loadImage("assets/anim/Dottie_Walk_0004.png"),
      "walk5":   loadImage("assets/anim/Dottie_Walk_0005.png"),
      "walk6":   loadImage("assets/anim/Dottie_Walk_0006.png"),
      "walk7":   loadImage("assets/anim/Dottie_Walk_0007.png")
    },
    animations: {
      "walk": {
        ids: ["walk0", "walk1", "walk2", "walk3", "walk4", "walk5", "walk6", "walk7"],
        period: 50,
        loop: true
      }
    },
    scale: 0.5,
    speed: 7,
  });
  
  sprites.cat = new Character({
    frames: {
      "default": loadImage("assets/still/Cat_Happy.png"),
      "nervous": loadImage("assets/still/Cat_Nervous.png"),
      "jump1":   loadImage("assets/anim/Cat Jump_0001.png"),
      "jump2":   loadImage("assets/anim/Cat Jump_0002.png"),
      "jump3":   loadImage("assets/anim/Cat Jump_0003.png"),
      "jump4":   loadImage("assets/anim/Cat Jump_0004.png"),
    },
    animations: {
      "jump": {
        ids: ["jump1","jump2","jump3","jump4"],
        period: 20,
        loop: false
      },
    },
    x: 452,
    y: 468,
    scale: 0.5,
    speed: 7,
  });

  sprites.cat.bubble = new SpeechBubble({y: 190});

  sprites.dealer = new Character({});

  sprites.guard = new Character({
    frames: {
      default: loadImage("assets/still/Bouncer.png")
    },
    x: 111,
    y: 540
  });
  
  sprites.guard.bubble = new SpeechBubble({offsX: 241, offsY: -414});

  sprites.thoughtBubble = new SpeechBubble({
    isThoughtBubble: true,
    y: 587
  });
  

  // INTERACTIBLES
  
  let interactFrames = {"default": loadImage("assets/prompt.png")};
  

  sprites.cat.interactible = new Interactible({
    frames: interactFrames,
    y: 150,
    radius: 200,
    targetConversation: "talkCat"
  })

  sprites.alleyHotspot = new Interactible({
    frames: interactFrames,
    x: 182,
    y: 194,
    radius: 100,
    targetScene: "alley",
    targetX: 1500,
    targetFacing: false
  })
  
  sprites.alleyHotspotInside = new Interactible({
    frames: interactFrames,
    x: 1500,
    y: 239,
    radius: 100,
    targetScene: "town",
    targetX: 182,
    targetFacing: true
  })

  sprites.barDoorHotspot = new Interactible({
    frames: interactFrames,
    x: 789,
    y: 194,
    radius: 100,
    targetScene: "bar",
    targetX: 2000,
    targetFacing: false
  })
  
  sprites.marketDoorHotspot = new Interactible({
    frames: interactFrames,
    x: 1311,
    y: 194,
    radius: 100,
    targetScene: "market",
    targetX: 1482,
    targetFacing: false
  })
  
  sprites.parkGateHotspot = new Interactible({
    frames: interactFrames,
    x: 1801,
    y: 194,
    radius: 100,
    targetScene: "park",
    targetX: 1671,
    targetFacing: false
  })
  
  sprites.parkGateHotspotInside = new Interactible({
    frames: interactFrames,
    x: 1666,
    y: 258,
    radius: 100,
    targetScene: "town",
    targetX: 1801,
    targetFacing: false
  })

  
  sprites.barDoorHotspotInside = new Interactible({
    frames: interactFrames,
    x: 2036,
    y: 239,
    radius: 100,
    targetScene: "town",
    targetX: 781,
    targetFacing: false
  })
  
  sprites.marketDoorHotspotInside = new Interactible({
    frames: interactFrames,
    x: 1559,
    y: 253,
    radius: 100,
    targetScene: "town",
    targetX: 1331,
    targetFacing: false
  })
}

function preloadScenes() {
  scenes.town = new Scene({
    background: loadImage("assets/env/Town.png"),
    scale: 0.5,
    camxMax: 4100/2,
    floor: 451,
  });

  scenes.alley = new Scene({
    background: loadImage("assets/env/Alley.png"),
    scale: 0.5,
    camxMax: 3173/2,
    floor: 534
  });
  
  scenes.bar = new Scene({
    background: loadImage("assets/env/Bar.png"),
    scale: 0.5,
    camxMax: 4200/2,
    floor: 534,
    xMin: 244,
    xMax: 2014
  });
  
  scenes.market = new Scene({
    background: loadImage("assets/env/Market.png"),
    scale: 0.5,
    camxMax: 3168/2,
    floor: 534
  });

  scenes.park = new Scene({
    background: loadImage("assets/env/Park.png"),
    scale: 0.5,
    camxMax: 3480/2,
    floor: 534
  });

  scenes.vip = new Scene({});

  scenes.office = new Scene({
    background: loadImage("assets/env/Office.png"),
    scale: 0.5,
    camxMax: 1920/2,
    floor: 534
  });
}

function setupConversations() {
  conversation.data = {
    talkCat: function() {
      if (!tempFlags.catConv)
        return "occult1";
      else if (tempFlags.catConv == "1")
        return "occult2"
    },
    occult1: [
      {who: "cat", anim: "nervous"},
      {who: "player", tempFlag: "catChoice", choices: ["Hi.","I can... read your mind."]},
      {ifTemp: "catChoice", eq:"0", who: "cat", say: "..."},
      {ifTemp: "catChoice", eq:"1", who: "cat", anim: "jump", say: "WHAT"},
      {ifTemp: "catChoice", eq:"1", who: "cat", anim: "default", tempFlag:"catConv", val:"1"},
    ],
    occult2: [
      {who: "cat", anim: "nervous"},
      {who: "cat", say: "But like really?"},
      {who: "player", say: "Yes."},
      {who: "cat", anim: "jump", say: "WHAT"},
      {who: "cat", anim: "default", tempFlag:"catConv", val:""},
    ]
  }
}

function setupScenes(time) {
  let playerScene = sprites.player.scene;

  // Remove everything
  scenes.town.removeAllSprites();
  scenes.alley.removeAllSprites();
  scenes.bar.removeAllSprites();
  scenes.market.removeAllSprites();
  scenes.park.removeAllSprites();
  scenes.vip.removeAllSprites();
  scenes.office.removeAllSprites();

  // Add common sprites
  scenes.town.addSprites([
    sprites.alleyHotspot,
    sprites.barDoorHotspot,
    sprites.marketDoorHotspot,
    sprites.parkGateHotspot
  ]);
  scenes.alley.addSprites([sprites.alleyHotspotInside]);
  scenes.bar.addSprites([sprites.barDoorHotspotInside, sprites.guard]);
  scenes.market.addSprites([sprites.marketDoorHotspotInside]);
  scenes.park.addSprites([sprites.parkGateHotspotInside]);
  scenes.vip.addSprites([]);
  scenes.office.addSprites([]);
  
  switch(time) {
    case 2:
      scenes.park.addSprites([sprites.cat]);
      break;
  }

  sprites.player.setScene(playerScene);
}