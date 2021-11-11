Cypress.Commands.add('fillInField', (text, field) => {
    cy.get('[data-testid=' + field + ']')
        .clear()
        .type(text)
})

Cypress.Commands.add('logOut', () => {
    cy.contains('Profile').click()
    cy.get('[data-testid=Settings]').should('exist')
    cy.get('[data-testid=Settings]').click()
    cy.contains('Currently learning').should('exist')
    cy.contains('Log out').click()

})
