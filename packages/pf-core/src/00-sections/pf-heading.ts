import { LitElement, html, property, customElement } from "lit-element";

@customElement("pf-heading")
export class PrefabHeading extends LitElement {
  @property({ type: Number }) rank: number = 2;

  render() {
    switch (this.rank) {
      case 1:
        return html`<h1><slot></slot></h1>`;
        break;
      case 2:
        return html`<h2><slot></slot></h2>`;
        break;
      case 3:
        return html`<h3><slot></slot></h3>`;
        break;
      case 4:
        return html`<h4><slot></slot></h4>`;
        break;
      case 5:
        return html`<h5><slot></slot></h5>`;
        break;
      case 6:
        return html`<h6><slot></slot></h6>`;
        break;
      default:
        return html`<h2><slot></slot></h2>`;
    }
  }
}
