import { LitElement, html, css, customElement } from "lit-element";
import Breakpoints from "../../packages/pf-breakpoints/src/index";

export default {
  title: "Layouts/Breakpoints"
}

@customElement("my-app")
export class MyApp extends LitElement {
  static styles = css`
    :host {
      height: 100vh;
      display: grid;
      grid-template-columns: 20px 1fr 20px;
      grid-template-rows: 100px 1fr;
      justify-content: center;
      padding: 10px;
    }
    @media (min-width: ${Breakpoints.desktop.minWidth}) {
      :host {
        grid-template-columns: 1fr 6fr 1fr;
        padding: 0px;
      }
    }
  `;

  render() {
    return html`
      Mobile View
      Tablet View
      Laptop View
      Desktop View
      TV View
    `
  }
}

const Template = (args) => `<my-app />`;

export const Primary = Template.bind({});
