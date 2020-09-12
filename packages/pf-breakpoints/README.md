# Layouts

[<- Back](../../README.md)

Layout breakpoints for responsive design. Support
mobile, tablet, laptop, desktop, and tv devices.

## Getting Started

Install the package:

```bash
npm i pf-layouts
```

### Definitions:

```javascript
export const breakpoints = {
  mobile: { maxWidth: css`384px` },
  tablet: { minWidth: css`384px`, maxWidth: css`768px` },
  laptop: { minWidth: css`768px`, maxWidth: css`1024px` },
  desktop: { minWidth: css`1024px`, maxWidth: css`1440px` },
  tv: { minWidth: css`1440px` }
};
```

### Example:

```typescript
import { LitElement, html, css, customElement } from "lit-element";
import Breakpoints from "pf-breakpoints";

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
      ...
    `
  }
}
```

## License

This project is __FREE__ to use, reuse, remix, and resell. This is
made possible by the [MIT license](/LICENSE).
