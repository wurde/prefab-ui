# Layouts

A collection of layouts.

## Responsive Layout

This component makes supporting many devices and screen sizes a breeze. Import the library and wrap your UI. Must have at least one layout; options include `4k`, `desktop`, `laptop`, `tablet`, and `mobile`. Graceful fallbacks support a mobile-first paradigm.

```
<pf-responsive-layout>
  <div slot="desktop">
    <h1>My App - Desktop</h1>
  </div>

  <div slot="mobile">
    <h1>My App - Mobile</h1>
  </div>
</pf-responsive-layout>
```

## Release a new version

After making changes run the following commands:

```bash
npm version [major minor patch]
npm release
```

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
