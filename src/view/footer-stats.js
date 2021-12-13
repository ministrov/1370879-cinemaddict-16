import { createElement } from '../render';

const createFooterStatsTemplate = () => (
  `<p>130 291 movies inside</p>
  `
);

export default class FooterStats {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createFooterStatsTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}


