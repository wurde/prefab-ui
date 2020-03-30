# Prefab Icons

A suite of icons built using the **Prefab Design System**.

## Getting Started

Configure access to GitHub Package Registry (`.npmrc` file):

```
registry=https://npm.pkg.github.com/wurde
```

Install the package:

```bash
npm i -D @wurde/pf-icons lit-element lit-html
```

Import the library. This defines the `pf-icon` component.

```javascript
// Do some stuff...

import "@wurde/pf-icons"

// Do some stuff...
```

Use the component like you would any HTML element. Set the `type` attribute to the icon you want. Other ways of customizing icons is via `size` or `color` attributes.

```html
<!-- Do some stuff -->

<pf-icon type="plus"></pf-icon>

<!-- Do some stuff -->
```

## Icon Types

- `close`
- `minus`
- `notdef`
- `plus`

## Release a new version

After making changes run the following commands:

```bash
npm version [major minor patch]
npm publish
```

## Scalable Vector Graphics

Our icons use the inline `<svg>` element. Inline SVG elements like any HTML element is controllable via CSS and JavaScript. This is a big win when it comes to customization, because we can use what we know.

We start by defining our element and the `viewBox`. This property takes four numbers `min-x`, `min-y`, `width`, and `height`. They specify a rectangle in user space which is mapped to the viewport. Using "0 0 20 20" we set an aspect ratio of 1:1. A single pixel inside the SVG is 1/20th the drawing.

```html
<svg viewBox="0 0 20 20">...</svg>
```

In addition to the viewBox we let the DOM know which SVG standard to use by setting the `xmlns` attribute. While this is unnecessary for inline SVG it is set to support any use-cases where an XML parser requires it.

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">...</svg>
```

Because all basic shapes can be created with a `path` element we use it for the majority of the icons. The shape of the path is defined by passing "path commands" to the `d` attribute. Commands include:

- MoveTo: `M, m`
- LineTo: `L, l, H, h, V, v`
- Cubic Bézier Curve: `C, c, S, s`
- Quadratic Bézier Curve: `Q, q, T, t`
- Elliptical Arc Curve: `A, a`
- ClosePath: `Z, z`

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="30px">
  <path d="M 0,0 L 10, 10 L 0 20" />
</svg>
```

The MoveTo instructions (`M or m`) is the equivalent of lifting your pen and moving it to another position without leaving a mark. The uppercase form `M` sets the exact coordinates `(x, y)`. The lowercase form `m` sets the coordinates as an offset from the current position `(dx, dy)`.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

## References

- https://developer.mozilla.org/en-US/docs/Web/SVG
