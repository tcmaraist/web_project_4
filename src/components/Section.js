export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  renderItems(items) {
    // use this._renderer to create the element for rendering
    items.forEach((item) => {
      const renderedItem = this._renderer(item);
      this.addItem(renderedItem);
    });
  }

  addItem(element) {
    // take the item and render it into this._element
    this._element.prepend(element);
  }
}
