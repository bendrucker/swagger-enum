'use strict'

const extend = require('xtend')

module.exports = swaggerEnum

function swaggerEnum (data, values) {
  return extend(data, {
    description: createDescription(data.description, values),
    type: 'integer',
    enum: Object.keys(values)
  })
}

function createDescription (original, values) {
  return Object.keys(values).reduce(function (acc, key) {
    return acc + `* ${values[key]}\n`
  }, original ? original + '\n\n' : '')
}
