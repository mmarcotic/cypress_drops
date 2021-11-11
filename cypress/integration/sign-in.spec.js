/// <reference types="cypress" />


describe('Sign in site', () => {
    // The following will test that the user can sign up, if they have legal credentials,
    // and that they cannot if they don't. For this test, I will be using user_information.json
    // located in fixtures


    before(() => {
        cy.visit('https://app.languagedrops.com')
    })

    it('Navigate to signup screen', () => {
        // Before the test is done, it needs to be navigated to the signup screen.
        // The following does just that
    })

    it('Try with all invalid data', () => {
        // This test case tests that the user cannot sign up with all invalid data
        // and checks the error message

    })

    it('Try with valid only username', () => {
        // This test case tests that the user cannot sign up with valid username,
        // but invalid email, password and checks the error message

    })

    it('Try with valid only password', () => {
        // This test case tests that the user cannot sign up with valid password,
        // but invalid email, username and checks the error message

    })

    it('Try with valid only email', () => {
        // This test case tests that the user cannot sign up with valid email,
        // but invalid password, username and checks the error message

    })

    it('Try with valid all', () => {
        // This test case tests that the user can sign up.

    })

    it('Can log out', () => {
        // This test case tests that the user can log out.

    })

})