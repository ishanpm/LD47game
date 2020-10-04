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
  
  let interactFrames = {"default": loadImage("assets/prompt.png")};
  
  sprites.barDoorHotspot = new Interactible({
    frames: interactFrames,
    x: 781,
    y: 163,
    radius: 100,
    targetScene: "bar",
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
}

function preloadScenes() {
  scenes.town = new Scene({
    background: loadImage("assets/town.png"),
    scale: 0.5,
    camxMax: 4100/2,
    floor: 451
  });
  scenes.town.addSprites([sprites.barDoorHotspot, sprites.cat]);
  
  scenes.bar = new Scene({
    background: loadImage("assets/bar.png"),
    scale: 0.5,
    camxMax: 4200/2,
    floor: 534
  });
  scenes.bar.addSprites([sprites.barDoorHotspotInside]);
}