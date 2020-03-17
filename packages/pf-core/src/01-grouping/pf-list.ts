import { LitElement, html, customElement } from "lit-element";

@customElement("pf-list")
export class PrefabList extends LitElement {
  render() {
    return html`
      <ul><slot></slot></ul>
    `;
  }
}
