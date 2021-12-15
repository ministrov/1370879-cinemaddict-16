import AbstractView from "./abstract";

const createShowMoreBtnTemplate = () => (
  `<button class='films-list__show-more'>Show more</button>
  `
);
export default class ShowMoreBtn extends AbstractView {
  get template() {
    return createShowMoreBtnTemplate();
  }
}



