function preloadSprites() {
  sprites.player = new Player({
    frames: {
      "default": loadImage("assets/Dunnet Walk Cycle_0006.png"),
      "walk0":   loadImage("assets/Dunnet Walk Cycle_0007.png"),
      "walk1":   loadImage("assets/Dunnet Walk Cycle_0000.png"),
      "walk2":   loadImage("assets/Dunnet Walk Cycle_0001.png"),
      "walk3":   loadImage("assets/Dunnet Walk Cycle_0002.png"),
      "walk4":   loadImage("assets/Dunnet Walk Cycle_0003.png"),
      "walk5":   loadImage("assets/Dunnet Walk Cycle_0004.png"),
      "walk6":   loadImage("assets/Dunnet Walk Cycle_0005.png"),
      "walk7":   loadImage("assets/Dunnet Walk Cycle_0006.png")
    },
    walkFrames: 8,
    scale: 0.5,
    y: 451,
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
  scenes.town.addSprites([sprites.barDoorHotspot]);
  
  scenes.bar = new Scene({
    background: loadImage("assets/bar.png"),
    scale: 0.5,
    camxMax: 4200/2,
    floor: 534
  });
  scenes.bar.addSprites([sprites.barDoorHotspotInside]);
}