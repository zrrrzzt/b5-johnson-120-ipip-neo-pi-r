'use strict'

module.exports = lang => {
  try {
    const questions = require(`./data/${lang}/questions.json`)
    const choices = require(`./data/${lang}/choices`)
    return questions.map(question => Object.assign(question, {choices: choices[question.keyed]}))
  } catch (error) {
    return false
  }
}
