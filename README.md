# lit 🔥

a ridiculously small responsive css framework.

I challenged myself to see how small I could go, but preserve everything Skeleton, Milligram, and other micro frameworks have to offer.
## Features
* 12 Column Responsive Grid
* Typography for h1-h6, and body text
* Three types of buttons
* Cards
* Inputs
* Table Styles

and a little bit more...

## Getting Started
1. Download [lit.css](https://github.com/Ajusa/lit/blob/master/dist/lit.css)
2. Include [lit.css](https://github.com/Ajusa/lit/blob/master/dist/lit.css)
3. Look at the docs on the website below to learn usage

Note: lit uses PostCSS to transform from CSSNext to CSS3. If you are comfortable outright using CSSNext, you can directly
include the lit.css file in the src directory. Otherwise, use the dist/lit.css file.

## Development Setup
1. Clone this repository (https://www.github.com/ajusa/lit)
2. Make sure you have [npm](https://www.npmjs.com/get-npm) installed
3. Run `npm install` in the root directory of lit
4. Install [gulp](https://github.com/gulpjs/gulp) **globally**. You will need to make sure that the `-g` flag is in the command, like `npm install -g gulp@next`
5. Once that is completed, run `gulp` to build the minified version and the gzipped file.
6. If you are making changes live, use `gulp watch`. `watch` will build the minified css file in dist whenever there is a change in `src/lit.css`.

[Docs](https://ajusa.github.io/lit/)
