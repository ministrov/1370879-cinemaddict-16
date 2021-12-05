import { createElement } from "../render";

const createFilmsBoardTemplate = () => (
  `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    <div class="films-list__container">
    
    </div>
  </section>`
);
export default class FilmsBoard {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template)
    }

    return this.#element;
  }

  get template() {
    return createFilmsBoardTemplate();
  }

  removeElement() {
    this.#element = null;
  }
};
