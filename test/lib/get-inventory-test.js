'use strict'

const test = require('ava')
const getInventory = require('../../lib/get-inventory')

test('it returns inventory for en', t => {
  t.truthy(getInventory('en'), 'en ok')
})

test('it returns inventory for no', t => {
  t.truthy(getInventory('no'), 'no ok')
})

test('it returns inventory for es', t => {
  t.truthy(getInventory('es'), 'es ok')
})

test('it returns false for xx', t => {
  t.falsy(getInventory('xx'), 'no xx found')
})
