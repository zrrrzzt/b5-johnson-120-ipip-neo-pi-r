'use strict'

const getInventory = require('./lib/get-inventory')
const shuffleInventory = require('./lib/shuffle-inventory')
const groupInventory = require('./lib/group-inventory')
const composeInventory = require('./lib/compose-inventory')

module.exports = (lang, shuffle = false) => {
  const inventory = getInventory(lang || 'en')

  if (!inventory) {
    throw new Error('Inventory not found. Try another language input.')
  }

  if (shuffle === false) {
    return inventory
  } else {
    const shuffeled = shuffleInventory(inventory)
    const grouped = groupInventory(shuffeled)
    return composeInventory(grouped)
  }
}
