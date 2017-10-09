'use strict'

const getInventory = require('./lib/get-inventory')

module.exports = lang => {
  const inventory = getInventory(lang || 'en')

  if (!inventory) {
    throw new Error('Inventory not found. Try another language input.')
  }

  return inventory
}
