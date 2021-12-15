import AbstractView from "./abstract";

const createFooterStatsTemplate = () => (
  `<p>130 291 movies inside</p>
  `
);

export default class FooterStats extends AbstractView {
  get template() {
    return createFooterStatsTemplate();
  }
}

