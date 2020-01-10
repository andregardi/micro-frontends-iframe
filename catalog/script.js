const eventBus = new EventBus();

const addToCart = e => eventBus.emmit("productToCart", e.target.value);
document
  .querySelectorAll("button")
  .forEach(button => button.addEventListener("click", addToCart));
