///<reference types="cypress" />

it('Open browser to the gooogle.com',()=>{
    cy.visit('https://www.google.com.do/')

    cy.get('.gLFyf').type("youtube{enter}")
    cy.get('.gLFyf').should('have.text','youtube')
})