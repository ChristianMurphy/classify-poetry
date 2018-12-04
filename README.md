# classify-poetry

> recognize the type of poetry in a given excerpt

## Installation

```sh
npm install classify-poetry
```

## Usage

### Classify Poetry

```js
var classifyPoetry = require("classify-poetry").classifyPoetry;
var types = classifyPoetry(
  "detect a haiku \n pleased to do, says algorithm \n thanks algorithm"
);
console.log(types); // ["haiku"]
```

### Detect Specific Type

#### ABC

```js
var abc = require("classify-poetry").abc;
abc(sampleText); // => true or false
```

<http://www.poeticterminology.net/01-abc-poem.htm>

#### Haiku

```js
var haiku = require("classify-poetry").haiku;
haiku(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Haiku_in_English>

### Sonnet

```js
var sonnet = require("classify-poetry").sonnet;
sonnet(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Sonnet>

### Tanka

```js
var tanka = require("classify-poetry").tanka;
tanka(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Tanka>

### Terza Rima

```js
var terzaRima = require("classify-poetry").terzaRima;
terzaRima(sampleText); // => true or false
```

<https://en.wikipedia.org/wiki/Terza_rima>
