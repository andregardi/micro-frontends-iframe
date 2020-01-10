function EventBus() {
  this.listeners = {};
  this.emmit = (type, data) => {
    window.parent.postMessage({ type, data }, "*");
  };
  this.subscribe = (type, fn) => {
    this.listeners[type]
      ? this.listeners[type].push(fn)
      : (this.listeners[type] = [fn]);
  };
  this.unsubscribe = (type, fn) => {
    this.listeners[type] = this.listeners[type].filter(
      listener => listener !== fn
    );
  };
  this.run = event => {
    const {
      data: { type, data }
    } = event;
    if (this.listeners[type]) {
      this.listeners[type].forEach(listener => {
        listener(data);
      });
    }
  };
  window.addEventListener("message", this.run);
}
