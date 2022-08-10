/// <reference types="cypress" />

it('google test',()=>{
    cy.visit('http://google.com')
    
    cy.get('.gLFyf').type('automation step by step{enter}')
    // cy.contains('Videos').click()
    // cy.contains('Videos').click()
    cy.get('.dmenKe > .cIkxbf > .usJj9c > h3').click()
})