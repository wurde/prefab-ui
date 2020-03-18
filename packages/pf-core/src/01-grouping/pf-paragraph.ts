import { LitElement, html, customElement } from "lit-element";

@customElement("pf-paragraph")
export class PrefabParagraph extends LitElement {
  render() {
    return html`
      <p><slot></slot></p>
    `;
  }
}
