# jspm-pkg-path

Resolves the jspm dependency name to a relative local path.
By default looks up `../../package.json`.

## Installation

`npm install OrKoN/jspm-pkg-path`

## Usage

```
  var jpath = require('jspm-pkg-path');
  var path = jpath('<packageName>'); // => app/jspm_packages/github/<username>/<packageName>@0.1.4
```

```
  var jpath = require('jspm-pkg-path');
  var path = jpath('<packageName>', {
    packageJsonPath: '../../package.json'
  }); // =>  app/jspm_packages/github/<username>/<packageName>@0.1.4
```


