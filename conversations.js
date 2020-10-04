class ConversationManager {
  constructor() {
    this.data = null;
  }
  
  playConversation(id) {
    
  }
  
  tick() {
    
  }
  
  draw() {
    
  }
}

let conversation = new ConversationManager();

conversation.data = {
  occult: [
    {who: "player", say: "I can... read your mind."},
    {who: "occult1", anim: "startle", say: "WHAT"},
    {who: "occult1", anim: "panic", say: "AAAAAAAA"},
  ]
}