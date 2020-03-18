import { LitElement, html, customElement } from "lit-element";

@customElement("pf-form")
export class PrefabForm extends LitElement {
  render() {
    return html`
      <form><slot></slot></form>
    `;
  }
}
