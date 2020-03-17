# Core

A set of core components built using the Prefab Design System.

## Getting Started

Configure access to GitHub Package Registry (`.npmrc` file):

```
@wurde:registry=https://npm.pkg.github.com
```

Install the package:

```bash
npm i -D @wurde/pf-core
```

Import the package:

```javascript
import { LitElement, html, customElement } from "lit-element";
import "@wurde/pf-core";

@customElement("my-app")
export class MyApp extends LitElement {
  onClick(e) {
    e.preventDefault();
    alert("Clicked");
  }

  render() {
    return html`<pf-button @click="${this.onClick}"></pf-button>`;
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
