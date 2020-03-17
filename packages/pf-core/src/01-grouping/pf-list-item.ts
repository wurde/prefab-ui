import { LitElement, html, customElement } from "lit-element";

@customElement("pf-list-item")
export class PrefabListItem extends LitElement {
  render() {
    return html`
      <li><slot></slot></li>
    `;
  }
}
