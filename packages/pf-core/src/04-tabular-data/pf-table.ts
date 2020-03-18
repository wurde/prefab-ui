import { LitElement, html, customElement } from "lit-element";

@customElement("pf-table")
export class PrefabTable extends LitElement {
  render() {
    return html`
      <table><slot></slot></table>
    `;
  }
}
