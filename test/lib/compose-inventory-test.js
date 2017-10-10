'use strict'

const test = require('ava')
const composeInventory = require('../../lib/compose-inventory')
const groupedInventoryData = require('../data/grouped-inventory.json')
const expectedComposedInventoryData = require('../data/composed-inventory.json')

test('it composes as expected', t => {
  t.deepEqual(expectedComposedInventoryData, composeInventory(groupedInventoryData), 'composed ok')
})
