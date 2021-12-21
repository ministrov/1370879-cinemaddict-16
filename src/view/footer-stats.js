import AbstractView from './abstract';

const createFooterStatsTemplate = () => (
  `<p>12movies inside</p>
  `
);

export default class FooterStats extends AbstractView {
  #films = null;

  constructor(films) {
    super();
    this.films = films;
  }

  get template() {
    return createFooterStatsTemplate(this.#films);
  }
}

