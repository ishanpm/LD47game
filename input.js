class VirtualButton {
  constructor() {
    this.held = false;
    this.next = false;
    this.pressed = false;
    this.released = false;
  }
  
  tick() {
    this.pressed = (!this.held && this.next);
    this.released = (this.held && !this.next);
    this.held = this.next;
  }
}

class InputManager {
  constructor() {
    this.keyMap = {
      "ArrowUp": "up",
      "ArrowDown": "down",
      "ArrowLeft": "left",
      "ArrowRight": "right",
      "w": "up",
      "s": "down",
      "a": "left",
      "d": "right",
      "z": "accept",
      "x": "cancel",
      "c": "pause",
      "Escape": "pause",
      " ": "accept",
      "Enter": "accept",
      "Shift": "cancel",
      "`": "debug1",
      "1": "debug2",
    };
    this.buttons = {
      up: new VirtualButton(),
      down: new VirtualButton(),
      left: new VirtualButton(),
      right: new VirtualButton(),
      pause: new VirtualButton(),
      accept: new VirtualButton(),
      cancel: new VirtualButton(),
      debug1: new VirtualButton(),
      debug2: new VirtualButton()
    }
    
    $(document).on("keydown", this._onkeydown.bind(this))
    $(document).on("keyup", this._onkeyup.bind(this))
  }
  
  _onkeydown(e) {
    let key = e.key;
    if (key.length == 1) {
      key = key.toLowerCase();
    }
    
    let action = this.keyMap[key]
    if (action) {
      this.buttons[action].next = true;
      e.preventDefault();
    }
  }
  
  _onkeyup(e) {
    let key = e.key;
    if (key.length == 1) {
      key = key.toLowerCase();
    }
    
    let action = this.keyMap[key]
    if (action) {
      this.buttons[action].next = false;
      e.preventDefault();
    }
  }
  
  tick() {
    for (let b in this.buttons) {
      this.buttons[b].tick();
    }
  }
}