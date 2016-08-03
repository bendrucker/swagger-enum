'use strict'

var test = require('tape')
var swaggerEnum = require('./')

test(function (t) {
  t.deepEqual(
    swaggerEnum({title: 'Num', description: 'beep'}, {0: 'boop'}),
    {
      title: 'Num',
      type: 'integer',
      description: 'beep<br><br><ul><li><strong>0: </strong>boop</li></ul>',
      enum: [
        '0'
      ]
    },
    'creates html description and schema'
  )

  t.end()
})
