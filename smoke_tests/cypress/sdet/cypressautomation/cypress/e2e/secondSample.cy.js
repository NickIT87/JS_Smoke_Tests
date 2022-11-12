describe('google page', () => {
    it('Visits to the search page', () => {
        cy.visit('https://www.google.com')
        cy.title().should('eq','Google')
        cy.get('[name="q"]').type('cypress.io {enter}')
        //cy.get('[name="btnK"]').click({ multiple: true })
    })
})
  