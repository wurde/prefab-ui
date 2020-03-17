import { LitElement, html, customElement } from "lit-element";

@customElement("pf-text")
export class PrefabText extends LitElement {
  render() {
    return html`
      <span><slot></slot></span>
    `;
  }
}
