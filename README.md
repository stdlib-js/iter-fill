<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# iterFill

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which replaces all values from a provided [iterator][mdn-iterator-protocol] from a start index to an end index with a static value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-fill
```

</section>

<section class="usage">

## Usage

```javascript
var iterFill = require( '@stdlib/iter-fill' );
```

#### iterFill( iterator, value\[, begin\[, end]] )

Returns an [iterator][mdn-iterator-protocol] which replaces all values from a provided [`iterator`][mdn-iterator-protocol] from a `begin` index to an `end` index with a static `value`.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14 );
// returns <Object>

var v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

By default, the returned [iterator][mdn-iterator-protocol] replaces/fills a provided [iterator's][mdn-iterator-protocol] first iterated value through an [iterator's][mdn-iterator-protocol] last iterated value. To specify an alternative start iteration index at which to begin filling (zero-based and **inclusive**), provide a `begin` argument.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14, 2 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

var bool = it.next().done;
// returns true
```

By default, the returned [iterator][mdn-iterator-protocol] continues filling until it replaces all of a provided [iterator's][mdn-iterator-protocol] iterated values. To specify an end iteration index at which to stop filling (zero-based and **non-inclusive**), provide an `end` argument.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14, 1, 3 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

If `begin` is greater than or equal to `end`, the returned [iterator][mdn-iterator-protocol] does not replace any iterated values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14, 3, 1 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `end` exceeds the length of the provided [`iterator`][mdn-iterator-protocol], the returned [iterator][mdn-iterator-protocol] replaces the subsequence of iterated values starting from `begin` until the last iterated value of the provided [`iterator`][mdn-iterator-protocol].
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-iter-randu' );
var iterFill = require( '@stdlib/iter-fill' );

var rand;
var it;
var r;

// Create a seeded iterator for generating pseudorandom numbers:
rand = randu({
    'seed': 1234,
    'iter': 100
});

// Create an iterator which replaces a subsequence of 10 generated numbers:
it = iterFill( rand, 3.14, 10, 20 );

// Perform manual iteration...
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-fill.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-fill

[test-image]: https://github.com/stdlib-js/iter-fill/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-fill/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-fill/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-fill?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-fill.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-fill/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-fill/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
