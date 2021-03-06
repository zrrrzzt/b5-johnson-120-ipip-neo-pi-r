'use strict'

const test = require('ava')
const getQuestions = require('../../index')

test('throws if language not found', t => {
  const expectedErrorMessage = 'Inventory not found. Try another language input.'
  const error = t.throws(() => {
    getQuestions('xx')
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('returns english as default', t => {
  t.truthy(getQuestions(), 'questions ok')
})

test('returns norwegian if supplied no', t => {
  t.truthy(getQuestions('no'), 'norwegian ok')
})

test('it shuffles if shuffle = true', t => {
  const questions = getQuestions()
  const shuffeled = getQuestions('en', true)
  t.notDeepEqual(questions[0], shuffeled[0], 'shuffeled ok')
})
