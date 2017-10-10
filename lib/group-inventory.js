'use strict'

module.exports = inventory => {
  return inventory.reduce((a, b) => {
    if (a.hasOwnProperty(b.domain)) {
      a[b.domain].push(b)
    } else {
      a[b.domain] = [b]
    }
    return a
  }, {})
}
