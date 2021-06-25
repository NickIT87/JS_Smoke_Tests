describe('Energy-Telecom Service Review', () => {
    it('Visit to the form page', () => {
        cy.visit('http://www.energy-telecom.portnov.com/qa/')
        cy.get('#firstName')
          .type('Nickolazz1')
          .should('have.value', 'Nickolazz1')
    })
})
  