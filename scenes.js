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

  // ENVIRONMENT

  sprites.clockTower = new Sprite({
    frames: {
      default: loadImage("assets/env/Clock Tower.png")
    },
    hAlign: 0,
    vAlign: 0,
    zOrder: -100
  })

  // INTERACTIBLES
  
  let interactFrames = {"default": loadImage("assets/prompt.png")};
  

  sprites.cat.interactible = new Interactible({
    frames: interactFrames,
    y: 150,
    radius: 200,
    targetConversation: "talkCat"
  })

  sprites.clockTowerHotspot = new Interactible({
    frames: interactFrames,
    x: 1017,
    y: 205,
    radius: 70,
    targetConversation: "changeTime"
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
    backgrounds: [
      loadImage("assets/env/Town_4.png"),
      loadImage("assets/env/Town_8.png"),
      loadImage("assets/env/Town_Midnight.png")
    ],
    scale: 0.5,
    camxMax: 4100/2,
    floor: 451,
    xMin: 54,
    xMax: 2000,
  });

  scenes.alley = new Scene({
    background: loadImage("assets/env/Alley.png"),
    scale: 0.5,
    camxMax: 3173/2,
    floor: 534,
    xMin: 93,
    xMax: 1500,
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
    floor: 534,
    xMin: 54,
    xMax: 1528,
  });

  scenes.park = new Scene({
    backgrounds: [
      loadImage("assets/env/Park_4.png"),
      loadImage("assets/env/Park_8.png"),
      loadImage("assets/env/Park_Midnight.png")
    ],
    scale: 0.5,
    camxMax: 3480/2,
    floor: 534,
    xMin: 54,
    xMax: 1671,
  });

  scenes.vip = new Scene({});

  scenes.office = new Scene({
    background: loadImage("assets/env/Office.png"),
    scale: 0.5,
    camxMax: 1920/2,
    floor: 534,
    xMin: 54,
    xMax: 910,
  });
}

function setupConversations() {
  conversation.data = {
    changeTime: function() {
      switch (currentDaytime) {
        case 0: return "changeTime0";
        case 1: return "changeTime1";
        case 2: return "changeTime2";
      }
    },
    changeTime0: [
      {who: "player", tempFlag: "timechoice", choices: ["Nevermind","Wait until 8pm","Wait until midnight","Reset the loop"]},
      {ifTemp: "timechoice", eq: "1", setTime: 1},
      {ifTemp: "timechoice", eq: "2", setTime: 2},
      {ifTemp: "timechoice", eq: "3", setTime: 0},
    ],
    changeTime1: [
      {who: "player", tempFlag: "timechoice", choices: ["Nevermind","Wait until midnight","Reset the loop"]},
      {ifTemp: "timechoice", eq: "1", setTime: 2},
      {ifTemp: "timechoice", eq: "2", setTime: 0},
    ],
    changeTime2: [
      {who: "player", tempFlag: "timechoice", choices: ["Nevermind","Reset the loop"]},
      {ifTemp: "timechoice", eq: "1", setTime: 0}
    ],
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
    sprites.clockTower,
    sprites.clockTowerHotspot,
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

  if (playerScene != null) {
    sprites.player.setScene(playerScene);
    playerScene.updateBackground();
  }
}