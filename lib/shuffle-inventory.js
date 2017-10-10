'use strict'

const shuffle = require('knuth-shuffle').knuthShuffle

module.exports = inventory => {
  return shuffle(inventory)
}
