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
      "walk7":   loadImage("assets/anim/Dunnet Walk Cycle_0007.png"),
      "default_vest": loadImage("assets/still/Dunnet_Vest_Standing.png"),
      "walk0_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0000.png"),
      "walk1_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0001.png"),
      "walk2_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0002.png"),
      "walk3_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0003.png"),
      "walk4_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0004.png"),
      "walk5_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0005.png"),
      "walk6_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0006.png"),
      "walk7_vest":   loadImage("assets/anim/Dunnet_Walk_Vest_0007.png"),
      "default_robe": loadImage("assets/still/Dunnet_Robe_Standing.png"),
      "walk0_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0000.png"),
      "walk1_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0001.png"),
      "walk2_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0002.png"),
      "walk3_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0003.png"),
      "walk4_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0004.png"),
      "walk5_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0005.png"),
      "walk6_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0006.png"),
      "walk7_robe":   loadImage("assets/anim/Dunnet_Walk_Robe_0007.png")
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

  sprites.player.thoughtBubble = new SpeechBubble({
    isThoughtBubble: true,
    y: 587
  });

  sprites.dottie = new Character({
    frames: {
      "default": loadImage("assets/anim/Dottie Shoot_0008.png"),
      "walk0":   loadImage("assets/anim/Dottie_Walk_0000.png"),
      "walk1":   loadImage("assets/anim/Dottie_Walk_0001.png"),
      "walk2":   loadImage("assets/anim/Dottie_Walk_0002.png"),
      "walk3":   loadImage("assets/anim/Dottie_Walk_0003.png"),
      "walk4":   loadImage("assets/anim/Dottie_Walk_0004.png"),
      "walk5":   loadImage("assets/anim/Dottie_Walk_0005.png"),
      "walk6":   loadImage("assets/anim/Dottie_Walk_0006.png"),
      "walk7":   loadImage("assets/anim/Dottie_Walk_0007.png"),
      "shoot0":  loadImage("assets/anim/Dottie Shoot_0000.png"),
      "shoot1":  loadImage("assets/anim/Dottie Shoot_0001.png"),
      "shoot2":  loadImage("assets/anim/Dottie Shoot_0002.png"),
      "shoot3":  loadImage("assets/anim/Dottie Shoot_0003.png"),
      "shoot4":  loadImage("assets/anim/Dottie Shoot_0004.png"),
      "shoot5":  loadImage("assets/anim/Dottie Shoot_0005.png"),
      "shoot6":  loadImage("assets/anim/Dottie Shoot_0006.png"),
      "shoot7":  loadImage("assets/anim/Dottie Shoot_0007.png"),
      "shoot8":  loadImage("assets/anim/Dottie Shoot_0008.png"),
    },
    animations: {
      "walk": {
        ids: ["walk0", "walk1", "walk2", "walk3", "walk4", "walk5", "walk6", "walk7"],
        period: 50,
        loop: true
      },
      "shoot": {
        ids: ["shoot0", "shoot1", "shoot2", "shoot3", "shoot4", "shoot5", "shoot6", "shoot7", "shoot8"],
        period: 100,
        loop: false
      }
    },
    scale: 0.5,
    speed: 7,
  });

  sprites.dottie.bubble = new SpeechBubble({offsY: -267});
  
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

  sprites.dealer = new Character({
    frames: {
      "default": loadImage("assets/still/Drug_Dealer.png")
    },
    scale: 0.5,
    x: 706,
    y: 532
  });

  sprites.dealer.bubble = new SpeechBubble({offsY: -414});

  sprites.guard = new Character({
    frames: {
      default: loadImage("assets/still/Bouncer.png")
    },
    scale: 0.5,
    x: 111,
    y: 540
  });
  
  sprites.guard.bubble = new SpeechBubble({offsX: 241, offsY: -414});

  sprites.cashier = new Character({
    frames: {
      "default": loadImage("assets/still/Dane_Sprite.png")
    },
    scale: 0.4,
    x: 260,
    y: 323
  })

  sprites.cashier.bubble = new SpeechBubble({offsY: -414});

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
  
  sprites.dealer.interactible = new Interactible({
    frames: interactFrames,
    radius: 200,
    y: 128,
    targetConversation: "talkDealer"
  })
  
  sprites.guard.interactible = new Interactible({
    frames: interactFrames,
    radius: 200,
    y: 108,
    targetConversation: "talkGuard"
  })

  sprites.cat.interactible = new Interactible({
    frames: interactFrames,
    radius: 200,
    y: 268,
    targetConversation: "talkCat"
  })

  sprites.cashier.interactible = new Interactible({
    frames: interactFrames,
    radius: 200,
    y: 100,
    targetConversation: "talkCashier"
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
    intro: [
      {narrate: "The dame walked into my office."},
      {narrate: "Not a Dane, mind you.\nThat would be a dog.\nShe was a sheep."},
      {who:"dottie", say:"You're... detective Dunnet?"},
      {who:"player", say:"The one and only, ma'am."},
      {who:"dottie", say:"My name is Dottie.\nYou must help me!\nMy husband... has just been..."},
      {who:"dottie", say:"Murdered!"},
      {narrate: "Murder, of course. I wouldn't have it any other way."},
      {narrate: "...Not that I want people to be murdered, obviously, just...\nYou know what I mean."},
      {who:"player", say:"Have you told the police?"},
      {who:"dottie", say:"They won't help me. My husband was not... in their favor."},
      {who:"dottie", say:"A friend told me you could solve any case, that you had some sort of trick."},
      {narrate: "She was right, of course.\nIt was an artifact that let me go back in time."},
      {narrate: "No case is impossible when you can witness the crime firsthand."},
      {who:"dottie", say:"Here’s a photo of him.\nMr. Lewis, you’ll recognize him immediately."},
      {who:"player", say:"Where was he last seen?"},
      {who:"dottie", say:"At the bar, The Watering Hole."},
      {who:"dottie", say:"Will you find out who did this?"},
      {who:"player", say:"Certainly. I'll prepare my investigation immediately."},
      {who:"dottie", say:"Thank you..."},
      {narrate: "As powerful as the artifact was, it couldn't erase a murder. That would only cause a paradox."},
      {narrate: "It would be enough to catch the perpetrator, and give some closure to the little lamb."},
      {narrate: "There’s no time like the present, especially when your future is in the past."},
      {narrate: "I’ll loop back to noon this morning and see what I can find."},
    ],
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
    enterTown: function() {
      if (permFlags["bossName"] === "1") {
        return "museBossName"
      } 
      return null;
    },
    museBossName: [
      {who: "player", say: "This rival gang leader must be the killer. I’ve got to get in there and see the evidence for myself."},
      {permFlag: "bossNme", val: "2"}
    ],
    talkDealer: function() {
      if (tempFlags.dealerConv) {
        return "talkDealer2";
      } else {
        if (currentDaytime === 0) {
          return "talkDealer0";
        } else {
          return "talkDealer1";
        }
      }
    },
    talkDealer0: [
      {who: "dealer", say:"Hey there. You got here right on time."},
      {who: "dealer", say:"I’m trying out a new business strategy; selling during the day. The cops won’t suspect a thing!"},
      {who: "player", say:"Son, I’m a cop."},
      {who: "dealer", say:"...Oh. Dang."},
      {who: "player", say:"Luckily, I’m not here for you. Answer a few questions and I’ll be on my way."},
      {who: "player", say:"Can you tell me anything about the bouncer who works at the Watering Hole?"},
      {who: "dealer", say:"Yeah, his name’s Brutus. I know, right? But he’s not so tough."},
      {who: "dealer", say:"He’s terrified of his boss, Mr. Smith. Now that guy’s scary. Looks kinda like you, actually."},
      {who: "player", say:"Well, that was easy - "},
      {who: "dealer", say:"And Brutus is on high duty today."},
      {who: "dealer", say:"Apparently Ace Lewis - the big boss - has some kinda high profile meeting today with a rival gang leader."},
      {who: "dealer", say:"It's supposed to be intense."},
      {who: "player", say:"...Anything else?"},
      {who: "dealer", say:"... No, that’s it."},
      {who: "dealer", say:"Am I arrested?"},
      {who: "player", say:"No, not today. But don’t let me see you again, ok?"},
      {who: "dealer", say:"Sweet!"},
      {tempFlag: "dealerConv", val: "1"},
      {permFlag: "bossName", val: "1"},
    ],
    talkDealer1: [
      {who: "dealer", say:"Sorry, bud, I don’t have anything on me. You should have been here this morning."}
    ],
    talkDealer2: [
      {who: "dealer", say:"Hey, thanks for not arresting me!"}
    ],
    talkCat: function() {
      if (tempFlags.catBan)
        return "catBan"
      if (sprites.player.curVariant === "robe")
        return "catTalk";
       
      return "catDeny"
    },
    catDeny: [
      {who:"cat", anim:"nervous", say:"Hey! Only official members are allowed into the circle! Come back with your uniform, mister!"},
      {who:"cat", anim:"default"}
    ],
    catBan: [
      {who:"cat", anim:"nervous", say:"Go away, you're banned!"},
      {who:"cat", anim:"default"}
    ],
    catTalk: [
      {who: "cat", say:"Sweet! Another member!"},
      {who: "player", say: "Hello… small child. What are you up to?"},
      {who: "cat", say:"Contacting the dead! There’s loads of spirits all around here. Can you hear them?"},
      {who: "player", say: " I do have excellent ears."},
      {who: "cat", anim:"jump", say:"WHAT? Really? Ask them what I’m thinking of so I know you’re not faking!"},
      {who: "player", ifPerm: "catCloak", eq: "", tempFlag: "choice", choice: ["I'm not sure"]},
      {who: "player", ifPerm: "catCloak", eq: "1", tempFlag: "choice", choice: ["I'm not sure", "Your awesome cloak"]},
      {ifTemp:"choice", eq:"0", transfer:"catUnimpressed"},
      {ifTemp:"choice", eq:"1", transfer:"catImpressed"}
    ],
    catUnimpressed: [
      {who: "cat", anim: "jump", say:"WHAT? A real medium would know it was my awesome cloak! Get out, you’re banned from the club!"},
      {who: "cat", anim: "default"},
      {tempFlag: "catBan", val: "1"},
      {permFlag: "catCloak", val: "1"}
    ],
    catImpressed: [
      {who: "cat", anim: "jump", say:"WHAT? You’re for real? That’s so cool! You’re way better than the last guy I asked to join the club."},
      {who: "player", say:"And who was this?"},
      {who: "cat", anim: "happy", say:"He was this really grumpy rabbit, kinda like you. But he had a different vest on."},
      {who: "cat", anim: "happy", say:"It wasn’t the official uniform, but I gave him a try anyway."},
      {who: "cat", say:"But he sucked! Now only uniform-wearing members are allowed in the club."},
      {who: "cat", anim: "default"},
      {permFlag: "bossVest", val: "1"}
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
  scenes.alley.addSprites([sprites.alleyHotspotInside, sprites.dealer]);
  scenes.bar.addSprites([sprites.barDoorHotspotInside, sprites.guard]);
  scenes.market.addSprites([sprites.marketDoorHotspotInside, sprites.cashier]);
  scenes.park.addSprites([sprites.parkGateHotspotInside]);
  scenes.vip.addSprites([]);
  scenes.office.addSprites([]);
  
  switch(time) {
    case 0:
      //scenes.town.addSprites([sprites.dottie]);
      //sprites.dottie.x = 200;
      //sprites.dottie.y = scenes.town.floor;
      break;
    case 2:
      scenes.park.addSprites([sprites.cat]);
      break;
  }

  if (playerScene != null) {
    sprites.player.setScene(playerScene);
    playerScene.updateBackground();
  }
}