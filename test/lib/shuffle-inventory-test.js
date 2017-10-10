'use strict'

const test = require('ava')
const inventory = require('../../lib/data/en/questions.json')
const shuffleInventory = require('../../lib/shuffle-inventory')

test('it returns a shuffled inventory', t => {
  t.notDeepEqual(inventory[0], shuffleInventory(inventory)[0], 'not the same')
})
