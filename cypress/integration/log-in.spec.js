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
        cy.contains('Log in').click()
        cy.contains('EMAIL').click()
        cy.get('[data-testid=EmaiSignup_Login]').click('left')
        cy.contains('Forgot password').should('exist')
    })

    it('Try with invalid data', () => {
        // This test case will test that the user cannot log in with incorrect email and password
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.invalid_email, 'EmaiSignup_Email')
            cy.fillInField(text.invalid_password, 'EmaiSignup_Password')
        })
        cy.contains('LOG IN').click()
        cy.contains('Invalid email address').should('exist')

    })

    it('Try valid only email', () => {
        // This test case will test that the user cannot log in with correct email and incorrect password
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.valid_email, 'EmaiSignup_Email')
            cy.fillInField(text.invalid_password, 'EmaiSignup_Password')
        })
        cy.contains('LOG IN').click()
        cy.contains('Incorrect username or password', { timeout: 20000 }).should('exist')

    })

    it('Try valid only password', () => {
        // This test case will test that the user cannot log in with incorrect email and correct password
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.invalid_email, 'EmaiSignup_Email')
            cy.fillInField(text.valid_password, 'EmaiSignup_Password')
        })
        cy.contains('LOG IN').click()
        cy.contains('Invalid email address').should('exist')

    })

    it('Try valid all', () => {
        // This test case will test that the user can log in
        cy.fixture('user_information.json').then(text => {
            cy.fillInField(text.valid_email, 'EmaiSignup_Email')
            cy.fillInField(text.valid_password, 'EmaiSignup_Password')
        })
        cy.contains('LOG IN').click()
        cy.contains('Log in', { timeout: 20000 }).should('not.exist')

    })

    it('Log out', () => {
        // This test case will test that the user can log out.
        // This primarily serves the purpose of setting browser up for other tests.
        cy.logOut()
        cy.contains('Profile', { timeout: 20000 }).should('not.exist')
        cy.wait(1000)

    })

})