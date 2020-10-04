function preloadSprites() {
  sprites.player = new Player({
    frames: {
      "default": loadImage("assets/Dunnet Walk Cycle_0006.png"),
      "walk0":   loadImage("assets/Dunnet Walk Cycle_0000.png"),
      "walk1":   loadImage("assets/Dunnet Walk Cycle_0001.png"),
      "walk2":   loadImage("assets/Dunnet Walk Cycle_0002.png"),
      "walk3":   loadImage("assets/Dunnet Walk Cycle_0003.png"),
      "walk4":   loadImage("assets/Dunnet Walk Cycle_0004.png"),
      "walk5":   loadImage("assets/Dunnet Walk Cycle_0005.png"),
      "walk6":   loadImage("assets/Dunnet Walk Cycle_0006.png"),
      "walk7":   loadImage("assets/Dunnet Walk Cycle_0007.png")
    },
    animations: {
      "walk": {
        ids: ["walk7", "walk0", "walk1", "walk2", "walk3", "walk4", "walk5", "walk6"],
        period: 50,
        loop: true
      }
    },
    scale: 0.5,
    speed: 7,
  });
  
  sprites.cat = new Character({
    frames: {
      "default": loadImage("assets/cat.png"),
      "startle":   loadImage("assets/cat-startle.png"),
      "scream1":   loadImage("assets/cat-scream1.png"),
      "scream2":   loadImage("assets/cat-scream2.png")
    },
    animations: {
      "startle": {
        ids: ["startle"],
        loop: false
      },
      "panic": {
        ids: ["scream1", "scream2"],
        period: 8,
        loop: true
      }
    },
    x: 1812,
    y: 453,
    scale: 0.5,
    speed: 7,
  });
  
  sprites.playerBubble = new SpeechBubble({
    parent: sprites.player,
    y: 190
  });
  
  sprites.catBubble = new SpeechBubble({
    parent: sprites.cat,
    y: 190
  });
  
  // INTERACTIBLES
  
  let interactFrames = {"default": loadImage("assets/prompt.png")};
  
  sprites.alleyHotspot = new Interactible({
    frames: interactFrames,
    x: 182,
    y: 194,
    radius: 100,
    targetScene: "alley",
    targetX: 2000,
    targetFacing: false
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
    targetX: 2000,
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
    background: loadImage("assets/town.png"),
    scale: 0.5,
    camxMax: 4100/2,
    floor: 451
  });
  scenes.town.addSprites([sprites.alleyHotspot, sprites.barDoorHotspot, sprites.marketDoorHotspot, sprites.parkGateHotspot, sprites.cat, sprites.playerBubble, sprites.catBubble]);
  
  scenes.bar = new Scene({
    background: loadImage("assets/bar.png"),
    scale: 0.5,
    camxMax: 4200/2,
    floor: 534
  });
  scenes.bar.addSprites([sprites.barDoorHotspotInside]);
  
  scenes.market = new Scene({
    background: loadImage("assets/Market.png"),
    scale: 0.5,
    camxMax: 3168/2,
    floor: 534
  });
  scenes.market.addSprites([sprites.marketDoorHotspotInside]);
}