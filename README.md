# PostCSS ViennaJS [![Build Status][ci-img]][ci]

This is the source code of a demo plugin I wrote during my talk about PostCSS, see here: http://mxs.is/pctalk

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/mxstbr/postcss-viennajs.svg
[ci]:      https://travis-ci.org/mxstbr/postcss-viennajs

## Functionality

It turns this

```css
.foo {
    vienna-js: awesome;
}
```

into this

```css
.foo {
  display: block;
}
```

and this

```css
.foo {
    vienna-js: horrible;
}
```

into this

```css
.foo {
  display: none;
}
```

## Usage

```js
postcss([ require('postcss-viennajs') ])
```

See [PostCSS] docs for examples for your environment.
