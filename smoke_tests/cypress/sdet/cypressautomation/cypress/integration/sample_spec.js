describe('My First Test', () => {
    it('Do much!', () => {
        expect(true).to.equal(true)
    })

    it('Does not do much!', () => {
        expect(true).to.equal(false)
    })

    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })
})
  