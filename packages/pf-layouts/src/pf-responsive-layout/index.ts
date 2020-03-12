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

  constructor() {
    super();
    const host = (<ShadowRoot>this.shadowRoot).host;
    const el_4k = host.querySelector('[slot="4k"]');
    const el_desktop = host.querySelector('[slot="desktop"]');
    const el_laptop = host.querySelector('[slot="laptop"]');
    const el_tablet = host.querySelector('[slot="tablet"]');
    const el_mobile = host.querySelector('[slot="mobile"]');

    const warn = document.createElement("p");
    warn.textContent = "No layout found (4k, desktop, laptop, tablet, mobile).";
    warn.style.color = "red";

    /**
     * Gracefully handle missing layouts.
     */

    if (el_4k === null) {
      let fallback_el =
        el_desktop || el_laptop || el_tablet || el_mobile || warn;
      let el = fallback_el.cloneNode(true);
      (<HTMLElement>el).setAttribute("slot", "4k");
      host.appendChild(el);
    }
    if (el_desktop === null) {
      let fallback_el = el_laptop || el_tablet || el_mobile || el_4k || warn;
      let el = fallback_el.cloneNode(true);
      (<HTMLElement>el).setAttribute("slot", "desktop");
      host.appendChild(el);
    }
    if (el_laptop === null) {
      let fallback_el = el_tablet || el_mobile || el_desktop || el_4k || warn;
      let el = fallback_el.cloneNode(true);
      (<HTMLElement>el).setAttribute("slot", "laptop");
      host.appendChild(el);
    }
    if (el_tablet === null) {
      let fallback_el = el_mobile || el_laptop || el_desktop || el_4k || warn;
      let el = fallback_el.cloneNode(true);
      (<HTMLElement>el).setAttribute("slot", "tablet");
      host.appendChild(el);
    }
    if (el_mobile === null) {
      let fallback_el = el_tablet || el_laptop || el_desktop || el_4k || warn;
      let el = fallback_el.cloneNode(true);
      (<HTMLElement>el).setAttribute("slot", "mobile");
      host.appendChild(el);
    }
  }

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
