'use strict'

module.exports = groupedInventory => {
  let inventory = []
  const templateKey = Object.keys(groupedInventory)[0]
  const templateList = groupedInventory[templateKey]

  templateList.forEach((item, index) => {
    Object.keys(groupedInventory).forEach(key => {
      inventory.push(groupedInventory[key][index])
    })
  })

  return inventory
}
