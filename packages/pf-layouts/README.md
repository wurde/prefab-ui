# Layouts

A collection of layouts.

## Getting Started

Configure access to GitHub Package Registry (`.npmrc` file):

```
@wurde:registry=https://npm.pkg.github.com
```

Install the package:

```bash
npm i -D @wurde/pf-layouts
```

## Responsive Layout

This component makes supporting many devices and screen sizes a breeze. Import the library and wrap your UI. You must define each layout: `4k`, `desktop`, `laptop`, `tablet`, and `mobile`. Graceful fallbacks are not yet support.

```
<pf-responsive-layout>
  <div slot="4k"><h1>My App - Desktop</h1></div>

  <div slot="desktop">
    <h1>My App - Desktop</h1>
  </div>

  <div slot="laptop"><h1>My App - Mobile</h1></div>
  <div slot="tablet"><h1>My App - Mobile</h1></div>

  <div slot="mobile">
    <h1>My App - Mobile</h1>
  </div>
</pf-responsive-layout>
```

## Release a new version

After making changes run the following commands:

```bash
npm version [major minor patch]
npm run release
```

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
