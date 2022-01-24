export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  addItem(element) {
    // take the item and render it into this._element
    this._element.prepend(element);
  }

  renderItems(items) {
    // use this._renderer to create the element for rendering
    items.forEach((item) => {
      this._renderer(item);
      /* const renderedItem = this._renderer(item);
      this.addItem(renderedItem); */
    });
  }
}
