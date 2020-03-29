import { LitElement, html, property, customElement } from "lit-element";
import { unsafeSVG } from "lit-html/directives/unsafe-svg";

import icons from "./svg.json";

@customElement("pf-icon")
export class PrefabIcon extends LitElement {
  @proprty({ type: String }) type: string = "noop"

  render() {
    return html`
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        ${unsafeSVG(icons[this.type])}
      </svg>
    `;
  }
}
