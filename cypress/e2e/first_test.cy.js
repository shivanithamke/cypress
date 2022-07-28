/// <reference types="cypress" />

it('google test',()=>{
    cy.visit('https://google.com')
    
    cy.get('.gLFyf').type('automation step by step{enter}')
    // cy.contains('Videos').click()
    cy.contains('Videos').click()
})