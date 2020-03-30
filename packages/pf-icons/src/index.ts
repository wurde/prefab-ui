import { LitElement, html, property, customElement } from "lit-element";
import { unsafeSVG } from "lit-html/directives/unsafe-svg";

import icons from "./svg.json";

@customElement("pf-icon")
export class PrefabIcon extends LitElement {
  @property({ type: String }) type: string = "notdef";
  @property({ type: String }) size: string = "30px";
  @property({ type: String }) color: string = "#000";

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="${this.size}"
        fill="${this.color}"
        stroke="${this.color}"
      >
        ${unsafeSVG((<any>icons)[this.type] || (<any>icons)["notdef"])}
      </svg>
    `;
  }
}
