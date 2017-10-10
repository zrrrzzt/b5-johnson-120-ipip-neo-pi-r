'use strict'

const test = require('ava')
const inventory = require('../../lib/data/en/questions.json')
const groupInventory = require('../../lib/group-inventory')
const groupedInventory = groupInventory(inventory)

test('it groups as expected', t => {
  t.is(Object.keys(groupedInventory).length, 5, 'There are 5 groups')
})

test('each group has expected number of items', t => {
  Object.keys(groupedInventory).forEach(key => {
    t.is(groupedInventory[key].length, 24, `${key} got 24 items`)
  })
})
