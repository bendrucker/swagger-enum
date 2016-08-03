'use strict'

const extend = require('xtend')

module.exports = swaggerEnum

function swaggerEnum (data, values) {
  if (!values) {
    values = data
    data = {}
  }

  return extend(data, {
    description: createDescription(data.description, values),
    type: 'integer',
    enum: Object.keys(values)
  })
}

function createDescription (original, values) {
  return Object.keys(values).reduce(function (acc, key, index) {
    if (!index) acc += '<ul>'
    return acc + `<li><strong>${key}: </strong>${values[key]}</li>`
  }, original ? original + '<br>' : '') + '</ul>'
}
