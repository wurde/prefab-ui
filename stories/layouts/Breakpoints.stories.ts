import { LitElement, html, css, customElement } from "lit-element";
import Breakpoints from "../../packages/pf-breakpoints/src/index";

export default {
  title: "Layouts/Breakpoints"
}

@customElement("my-app")
class MyApp extends LitElement {
  static styles = css`
    :host {
      height: 100vh;
      display: grid;
      justify-content: center;
      padding: 20px;
      background-color: #eaf1fc;
    }

    .header::after {
      content: "Mobile";
    }

    @media (min-width: ${Breakpoints.tablet.minWidth}) {
      :host {
        background-color: #005777;
      }
      .header::after {
        content: "Tablet";
      }
    }
    @media (min-width: ${Breakpoints.laptop.minWidth}) {
      :host {
        background-color: #006d95;
      }
      .header::after {
        content: "Laptop";
      }
    }
    @media (min-width: ${Breakpoints.desktop.minWidth}) {
      :host {
        background-color: #0087aa;
      }
      .header::after {
        content: "Desktop";
      }
    }
    @media (min-width: ${Breakpoints.tv.minWidth}) {
      :host {
        background-color: #00a1be;
      }
      .header::after {
        content: "TV";
      }
    }
  `;

  render() {
    return html`<h2 class="header"></h2>`;
  }
}

const Template = (args) => `<my-app />`;

export const Primary = Template.bind({});
