<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dlamch

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine double-precision floating-point machine parameters.



<section class="usage">

## Usage

To use in Observable,

```javascript
dlamch = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlamch@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/lapack-base-dlamch/tags). For example,

```javascript
dlamch = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlamch@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dlamch = require( 'path/to/vendor/umd/lapack-base-dlamch/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlamch@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dlamch;
})();
</script>
```

#### dlamch( cmach )

Determines double-precision floating-point machine parameters.

```javascript
var out = dlamch( 'E' );
// returns 1.1102230246251565e-16
```

The function has the following parameters:

-   **cmach**: specifies the value to be returned. The following characters are supported:

    -   `'E'`/`'e'`: (eps) relative machine precision.
    -   `'S'`/`'s'`: (sfmin) safe minimum such that `1/sfmin` does not overflow.
    -   `'B'`/`'b'`: (base) base of the machine (also known as the floating-point radix).
    -   `'P'`/`'p'`: (prec) `eps*base`.
    -   `'N'`/`'n'`: (t) number of (base) digits in the mantissa.
    -   `'R'`/`'r'`: (rnd) `1.0` when rounding occurs in addition and `0.0` otherwise.
    -   `'M'`/`'m'`: (emin) minimum exponent before (gradual) underflow.
    -   `'U'`/`'u'`: (rmin) underflow threshold.
    -   `'L'`/`'l'`: (emax) largest exponent before overflow.
    -   `'O'`/`'o'`: (rmax) overflow threshold.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlamch()` corresponds to the [LAPACK][lapack] function [`dlamch`][lapack-dlamch].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlamch@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = dlamch( 'E' );
console.log( 'Precision: %d', out );

out = dlamch( 'S' );
console.log( 'Safe minimum: %d', out );

out = dlamch( 'B' );
console.log( 'Base: %d', out );

out = dlamch( 'P' );
console.log( 'Precision*base: %d', out );

out = dlamch( 'N' );
console.log( 'Number of digits in mantissa: %d', out );

out = dlamch( 'R' );
console.log( 'Rounding: %d', out );

out = dlamch( 'M' );
console.log( 'Minimum exponent before underflow: %d', out );

out = dlamch( 'U' );
console.log( 'Underflow threshold: %d', out );

out = dlamch( 'L' );
console.log( 'Maximum exponent before overflow: %d', out );

out = dlamch( 'O' );
console.log( 'Overflow threshold: %d', out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-dlamch.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-dlamch

[test-image]: https://github.com/stdlib-js/lapack-base-dlamch/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/lapack-base-dlamch/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-dlamch/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-dlamch?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-dlamch.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-dlamch/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-dlamch/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-dlamch/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-dlamch/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-dlamch/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-dlamch/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-dlamch/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-dlamch/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-dlamch/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlamch]: https://www.netlib.org/lapack/explore-html/d4/d86/group__lamch_gaeab255e77cbd3b0f31aea74ed0ce099e.html#gaeab255e77cbd3b0f31aea74ed0ce099e

</section>

<!-- /.links -->
