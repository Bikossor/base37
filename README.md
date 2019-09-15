# base37
A one-way binary-to-text encoding algorithm

[![Build Status](https://travis-ci.org/Bikossor/base37.svg?branch=develop)](https://travis-ci.org/Bikossor/base37)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/base37.svg)
![npm](https://img.shields.io/npm/dm/base37.svg)
![GitHub issues](https://img.shields.io/github/issues/bikossor/base37.svg)
![GitHub closed issues](https://img.shields.io/github/issues-closed/bikossor/base37.svg)
![GitHub](https://img.shields.io/github/license/bikossor/base37.svg)

## Table of contents
- [Features](#Features)
- [Installation](#Installation)
  - [Installation for Node.js](#Installation-for-Nodejs)
  - [Installation for browsers](#Installation-for-browsers)
- [Usage](#Usage)
  - [Usage in Node.js](#Usage-in-Nodejs)
  - [Usage in browsers](#Usage-in-browsers)
- [Contributing](#Contributing)
- [Versioning](#Versioning)
- [Authors](#Authors)
- [License](#License)

## Features

- No ambiguous characters
- Easy to spell out
- Easy to read
- Completly URL-safe
- Mobile-friendly
    - A base37 string can be selected completely in one go

## Installation
### Installation for Node.js
```
npm i base37 --save
```

### Installation for browsers
Include this line in your HTML ([preferably in the body](https://www.w3schools.com/js/js_whereto.asp)) and you can obtain base37 via the jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/base37"></script>
```
or the unpkg CDN:
```html
<script src="https://unpkg.com/base37"></script>
```
or you can download the latest version of base37 [here](https://github.com/Bikossor/base37/releases/latest).

## Usage
### Usage in Node.js

```javascript
const base37 = require("base37");

console.log(base37.encode("Hello World!"));
//=> "zryy0wd03yqx"
```

### Usage in browsers
```javascript
console.log(base37.encode("Hello World!"));
//=> "zryy0wd03yqx"
```

## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/base37/tags) on this repository. 

## Authors
- [Bikossor](https://github.com/Bikossor) (Initial creator)

See also the list of [contributors](https://github.com/bikossor/base37/contributors) who participated in this project.

## License
This project is licensed under the GPL-3.0 License - see [here](LICENSE) for more details.