# detect-poetry

> recognize the type of poetry in a given excerpt

## Installation

```sh
npm install detect-poetry
```

## Usage

### Detect Poetry

```js
var detectPoetry = require("detect-poetry").detectPoetry;
var types = detectPoetry(
  "detect a haiku \n pleased to do, says algorithm \n thanks algorithm"
);
console.log(types); // ["haiku"]
```

### Detect Specific Type

#### ABC

```js
var abc = require("detect-poetry").abc;
haiku(sampleText) // => true or false
```

<http://www.poeticterminology.net/01-abc-poem.htm>

#### Haiku

```js
var haiku = require("detect-poetry").haiku;
haiku(sampleText) // => true or false
```

<https://en.wikipedia.org/wiki/Haiku_in_English>

### Tanka

```js
var tanka = require("detect-poetry").tanka;
haiku(sampleText) // => true or false
```

<https://en.wikipedia.org/wiki/Tanka>