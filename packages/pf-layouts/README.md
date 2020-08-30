# Layouts

[<- Back](../../README.md)

Standardize your team on these 5 viewport breakpoints. They cover mobile, tablet, laptop, desktop, and tv devices. Use them inside your layouts, pages, and custom components to build responsive mobile-first experiences.

## Getting Started

Configure access to GitHub Package Registry (`.npmrc` file):

```
registry=https://npm.pkg.github.com/wurde
```

Install the package:

```bash
npm i -D @wurde/pf-layouts
```

## Breakpoints

Use `brekapoints` as your single source of truth for your layouts. Choosing convention over configuration reduces mental overhead for your team and avoids divergent codebases. Current devices and screen sizes supported include `tv`, `desktop`, `laptop`, `tablet`, and `mobile`.

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
import { breakpoints } from "@wurde/pf-layouts";

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
    @media (min-width: ${breakpoints.desktop.minWidth}) {
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

## Release a new version

After making changes run the following commands:

```bash
npm version [major minor patch]
npm publish
```

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
