/// <reference types="cypress" />

describe('Initial user experience', () => {

  before(() => {
    cy.visit('https://app.languagedrops.com')
  })

  it('Select language', () => {
    // First screen that appears to an unlogged user is the choice between continuing unlogged
    // and selecting a language or logging in.
    // this test case will choose the language for the user. For simplicity sake, the user will
    // choose German.
  })

  it('Click off popups', () => {
    // After a language is selected, one or two popups appear for the user. In order to continue
    // this test case will click them off
  })

  it('Start tutorial', () => {
    // After popups are clicked off, a Start tutorial button will appear. This test case clicks it.

  })
})