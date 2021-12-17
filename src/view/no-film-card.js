import AbstractView from './abstract';

const createNoFilmCardTemplate = () => '<h2 class="films-list__title">There are no movies in our database</h2>';

export default class NoFilmCard extends AbstractView {
  get template() {
    return createNoFilmCardTemplate();
  }
}

