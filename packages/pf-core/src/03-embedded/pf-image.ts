import { LitElement, html, property, customElement } from "lit-element";

@customElement("pf-image")
export class PrefabImage extends LitElement {
  @property({ type: String }) src: string = "#";

  render() {
    return html`
      <img src="${this.src}"><slot></slot></img>
    `;
  }
}
