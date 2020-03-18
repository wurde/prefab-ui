import { LitElement, html, customElement } from "lit-element";

@customElement("pf-link")
export class PrefabLink extends LitElement {
  render() {
    return html`
      <a><slot></slot></a>
    `;
  }
}
