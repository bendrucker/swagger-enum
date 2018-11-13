# swagger-enum [![Build Status](https://travis-ci.org/bendrucker/swagger-enum.svg?branch=master)](https://travis-ci.org/bendrucker/swagger-enum) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/swagger-enum.svg)](https://greenkeeper.io/)

> Generate readable enum definitions for Swagger


## Install

```
$ npm install --save swagger-enum
```


## Usage

```js
var Enum = require('swagger-enum')

Enum({title: 'Status', description: 'The status'}, {
  0: 'off',
  1: 'on'  
})
//=> {title: ..., type: 'integer', description: ...}
```

The description will be:

```html
The status<ul><li><strong>0: </strong>off</li><li><strong>1: </strong>on</li></ul>
```

## API

#### `Enum([data], values)` -> `object`

##### data

*Required*  
Type: `object`

Initial data for the schema.

##### values

*Required*  
Type: `object`

An object containing enum values (the keys are integers).


## License

MIT © [Ben Drucker](http://bendrucker.me)
