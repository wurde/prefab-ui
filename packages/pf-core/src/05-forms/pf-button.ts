import { LitElement, html, customElement } from "lit-element";

@customElement("pf-button")
export class PrefabButton extends LitElement {
  render() {
    return html`
      <button type="button"><slot></slot></button>
    `;
  }
}
