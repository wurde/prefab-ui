import { LitElement, html, customElement } from "lit-element";

@customElement("pf-hello")
export class PrefabHello extends LitElement {
  render() {
    return html`<span>Hello, world!</span>`;
  }
}
