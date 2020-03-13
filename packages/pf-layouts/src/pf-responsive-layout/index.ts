import { LitElement, html, css, customElement } from "lit-element";

@customElement("pf-responsive-layout")
export class PrefabResponsiveLayout extends LitElement {
  static styles = css`
    ::slotted(*) {
      display: none;
    }
    @media screen and (max-width: 384px) {
      ::slotted([slot="mobile"]) {
        display: block;
      }
    }

    @media screen and (min-width: 384px) and (max-width: 768px) {
      ::slotted([slot="tablet"]) {
        display: block;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      ::slotted([slot="laptop"]) {
        display: block;
      }
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
      ::slotted([slot="desktop"]) {
        display: block;
      }
    }

    @media screen and (min-width: 1440px) {
      ::slotted([slot="4k"]) {
        display: block;
      }
    }
  `;

  render() {
    return html`
      <slot name="4k"></slot>
      <slot name="desktop"></slot>
      <slot name="laptop"></slot>
      <slot name="tablet"></slot>
      <slot name="mobile"></slot>
    `;
  }
}
