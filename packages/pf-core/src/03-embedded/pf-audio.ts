import { LitElement, html, property, customElement } from "lit-element";

@customElement("pf-audio")
export class PrefabAudio extends LitElement {
  @property({ type: String }) src: string = "#";

  render() {
    return html`
      <audio src="${this.src}"></audio>
    `;
  }
}
