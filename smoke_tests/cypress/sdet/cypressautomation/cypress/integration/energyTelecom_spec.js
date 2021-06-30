describe('Energy-Telecom Service Review', () => {
    const valid_data = {
        firstName: "John",
        lastName: "Doe",
        streetAddress: "nortumberlend 21",
        city: "Forks",
        state: "LA",
        zip: "12345",
        email: "test@mail.com",
        phone: ["+38", "844", "345", "4567"],
        contactMe: ["Phone", "Email"],
        referredBy: "M.Portnov"
    }

    it('should be submitted the valid form', () => {     
        cy.visit('http://www.energy-telecom.portnov.com/qa/')
        cy.get('#firstName')
            .type(valid_data.firstName)
            .should('have.value', valid_data.firstName)
        cy.get('[name="lastName"]')
            .type(valid_data.lastName)
            .should('have.value', valid_data.lastName)
        cy.get('.longEdit')
            .type(valid_data.streetAddress)
            .should('have.value', valid_data.streetAddress)
        cy.get(':nth-child(4) > .middleEdit4')
            .type(valid_data.city)
            .should('have.value', valid_data.city)
        cy.get('select.middleEdit1')
            .select(valid_data.state)
            .should('have.value', valid_data.state)
        cy.get(':nth-child(4) > input.middleEdit1')
            .type(valid_data.zip)
            .should('have.value', valid_data.zip)
        cy.get('[name="email"]')
            .type(valid_data.email)
            .should('have.value', valid_data.email)
        cy.get('#phone1')
            .type(valid_data.phone[1])
            .should('have.value', valid_data.phone[1])
        cy.get('#phone2')
            .type(valid_data.phone[2])
            .should('have.value', valid_data.phone[2])
        cy.get('#phone3')
            .type(valid_data.phone[3])
            .should('have.value', valid_data.phone[3])
        cy.get('[name="bestWayToContact"]')
            .select(valid_data.contactMe[0])
            .should('have.value', valid_data.contactMe[0])
        cy.get(':nth-child(8) > .middleEdit5')
            .type(valid_data.referredBy)
            .should('have.value', valid_data.referredBy)
        cy.get('[name="submitData"]').click()
        cy.wait(4000)
        cy.location().should((location) => {
            expect(location.href).to.eq('http://www.energy-telecom.portnov.com/qa/FormCompleted.html')
        })
    })
})
  