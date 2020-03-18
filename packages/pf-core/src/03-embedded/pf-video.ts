import { LitElement, html, property, customElement } from "lit-element";

@customElement("pf-video")
export class PrefabVideo extends LitElement {
  @property({ type: String }) src: string = "#";

  render() {
    return html`
      <video src="${this.src}"></video>
    `;
  }
}
