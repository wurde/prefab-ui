import { LitElement, html, property, customElement } from "lit-element";

@customElement("pf-link")
export class PrefabLink extends LitElement {
  @property({ type: String }) href: string = "#";

  render() {
    return html`
      <a href="${this.href}"><slot></slot></a>
    `;
  }
}
