/// <reference types="cypress" />


describe('Sign in site', () => {
    // The following will test that the user can sign up, if they have legal credentials,
    // and that they cannot if they don't. For this test, I will be using user_information.json
    // located in fixtures.
    // Additionally, filling in fields will be defined and re-used for the purpose of keeping the
    // script clean in support/commands.js (re-used in ./log-in.spec.js)

    before(() => {
        cy.visit('https://app.languagedrops.com')
    })

    it('Navigate to signup screen', () => {
        // Before the test is done, it needs to be navigated to the signup screen.
        // The following does just that
        cy.contains('Log in').click()
        cy.contains('EMAIL').click()
        cy.contains('Sign up').should('exist')
    })

    it('Try with all invalid data', () => {
        // This test case tests that the user cannot sign up with all invalid data
        // and checks the error message
        // by the way, I think you have a typo in data-testid=EmaiSignup_Name (missing L in email)
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.invalid_email, 'EmaiSignup_Email')
            cy.fillInField(text.invalid_password, 'EmaiSignup_Password')
            cy.fillInField(text.invalid_username, 'EmaiSignup_Name')
        })
        cy.get('[data-testid=EmaiSignup_Submit]').click()
        cy.contains('Username must be longer than 2 characters Invalid' +
            ' email address Minimum password length is 6 symbols').should('exist')

    })

    it('Try with valid only username', () => {
        // This test case tests that the user cannot sign up with valid username,
        // but invalid email, password and checks the error message
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.invalid_email, 'EmaiSignup_Email')
            cy.fillInField(text.invalid_password, 'EmaiSignup_Password')
            cy.fillInField(text.valid_username, 'EmaiSignup_Name')
        })
        cy.get('[data-testid=EmaiSignup_Submit]').click()
        cy.contains('Invalid email address Minimum password length is 6 symbols').should('exist')

    })

    it('Try with valid only password', () => {
        // This test case tests that the user cannot sign up with valid password,
        // but invalid email, username and checks the error message
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.invalid_email, 'EmaiSignup_Email')
            cy.fillInField(text.valid_password, 'EmaiSignup_Password')
            cy.fillInField(text.invalid_username, 'EmaiSignup_Name')
        })
        cy.get('[data-testid=EmaiSignup_Submit]').click()
        cy.contains('Username must be longer than 2 characters Invalid email address').should('exist')

    })

    it('Try with valid only email', () => {
        // This test case tests that the user cannot sign up with valid email,
        // but invalid password, username and checks the error message
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.valid_email, 'EmaiSignup_Email')
            cy.fillInField(text.invalid_password, 'EmaiSignup_Password')
            cy.fillInField(text.invalid_username, 'EmaiSignup_Name')
        })
        cy.get('[data-testid=EmaiSignup_Submit]').click()
        cy.contains('Username must be longer than 2 characters' +
            ' Minimum password length is 6 symbols').should('exist')

    })

    it('Try with duplicate email', () => {
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.valid_email, 'EmaiSignup_Email')
            cy.fillInField('1588sdawdyx', 'EmaiSignup_Password')
            cy.fillInField(text.valid_username, 'EmaiSignup_Name')
        })
        cy.get('[data-testid=EmaiSignup_Submit]').click()
        cy.contains('Incorrect username or password', { timeout: 20000 }).should('exist')
        
    })

    it('Try with valid all', () => {
        // This test case tests that the user can sign up.
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.valid_email, 'EmaiSignup_Email')
            cy.fillInField(text.valid_password, 'EmaiSignup_Password')
            cy.fillInField(text.valid_username, 'EmaiSignup_Name')
        })
        cy.get('[data-testid=EmaiSignup_Submit]').click()
        cy.contains('Sign up', { timeout: 20000 }).should('not.exist')

    })

    it('Can log out', () => {
        // This test case tests that the user can log out.
        cy.logOut()
        cy.contains('Profile').should('not.exist')
        cy.wait(1000)

    })

})