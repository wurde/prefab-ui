import { LitElement, html, customElement } from "lit-element";

@customElement("pf-heading")
export class PrefabHeading extends LitElement {
  render() {
    return html`
      <h2><slot></slot></h2>
    `;
  }
}
