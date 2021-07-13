# classify-poetry

[![NPM Version](https://img.shields.io/npm/v/classify-poetry.svg)](https://www.npmjs.com/package/classify-poetry)
[![Build status](https://github.com/ChristianMurphy/classify-poetry/workflows/CI/badge.svg?branch=main)](https://github.com/ChristianMurphy/classify-poetry/actions)

> recognize the type of poetry in a given excerpt

## Installation

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

```sh
npm install classify-poetry
```

## Usage

### Classify Poetry

```js
import { classifyPoetry } from "classify-poetry";
const types = classifyPoetry(
  "detect a haiku \n pleased to do, says algorithm \n thanks algorithm"
);
console.log(types); // ["haiku"]
```

### Detect Specific Type

#### ABC

```js
import { abc } from "classify-poetry";
abc(sampleText); // => true or false
```

<http://www.poeticterminology.net/01-abc-poem.htm>

#### Couplet

```js
import { couplet } from "classify-poetry";
couplet(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Couplet>

#### Haiku

```js
import { haiku } from "classify-poetry";
haiku(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Haiku_in_English>

#### Limerick

```js
import { limerick } from "classify-poetry";
limerick(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Limerick_(poetry)>

#### Quatrain

```js
import { quatrain } from "classify-poetry";
quatrain(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Quatrain>

#### Sonnet

```js
import { sonnet } from "classify-poetry";
sonnet(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Sonnet>

#### Tanka

```js
import { tanka } from "classify-poetry";
tanka(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Tanka>

#### Terza Rima

```js
import { terzaRima } from "classify-poetry";
terzaRima(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Terza_rima>
