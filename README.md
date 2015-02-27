# jspm-pkg-path

Resolves the jspm dependency name to a relative local path.
By default looks up `../../package.json`.

## Installation

`npm install OrKoN/jspm-pkg-path`

## Usage

```
  var jpath = require('jspm-pkg-path');
  var path = jpath('<packageName>');
```

```
  var jpath = require('jspm-pkg-path');
  var path = jpath('<packageName>', {
    packageJsonPath: '../../package.json'
  });
```


