class ConversationManager {
  constructor() {
    this.data = null;
    this.curConversation = null;
    this.convStep = 0;
    this.lastBubble = null;
  }
  
  playConversation(id) {
    this.curConversation = this.data[id];
    if (this.curConversation == null) {
      console.error(`Unknown conversation ${id}`);
    } else {
      this.convStep = 0;
      this.advanceConversation();
    }
  }
  
  advanceConversation() {
    // Cleanup previous step
    if (this.lastBubble) {
      this.lastBubble.invisible = true;
    }
    
    if (this.convStep >= this.curConversation.length) {
      this.curConversation = null;
      return;
    }
    
    let step = this.curConversation[this.convStep];
    
    let character = sprites[step.who];
    let bubble = sprites[step.who + "Bubble"]; // TODO
    
    if (step.say) {
      this.lastBubble = bubble;
      bubble.invisible = false;
      bubble.text = step.say;
    }
    
    if (step.anim) {
      character.startAnimation(step.anim);
    }
    
    this.convStep++;
    
    if (step.next) {
      // Do another step
      this.advanceConversation();
    }
  }
  
  tick() {
    if (this.curConversation !== null && input.buttons.accept.pressed) {
      this.advanceConversation();
    }
  }
  
  draw() {
    // eh
  }
}

let conversation = new ConversationManager();

conversation.data = {
  occult: [
    {who: "player", say: "I can... read your mind."},
    {who: "cat", anim: "startle", say: "WHAT"},
    {who: "cat", anim: "panic", say: "AAAAAAAA"},
    {who: "cat", anim: "default", next: true},
  ]
}