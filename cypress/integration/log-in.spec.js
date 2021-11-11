/// <reference types="cypress" />

describe('Log in site', () => {
    // The following will test that the user can log in, if they have correct credentials,
    // and that they cannot if they don't. For this test, I will be using user_information.json
    // located in fixtures

    before(() => {
        cy.visit('https://app.languagedrops.com')
    })

    it('Navigate to log in screen', () => {
        // For this test to progress forward, it needs to get the correct site
        // the following will take us there
    })

    it('Try with invalid data', () => {
        // This test case will test that the user cannot log in with incorrect email and password

    })

    it('Try valid only email', () => {
        // This test case will test that the user cannot log in with correct email and incorrect password

    })

    it('Try valid only password', () => {
        // This test case will test that the user cannot log in with incorrect email and correct password

    })

    it('Try valid all', () => {
        // This test case will test that the user can log in

    })

    it('Log out', () => {
        // This test case will test that the user can log out.
        // This primarily serves the purpose of setting browser up for other tests.

    })

})