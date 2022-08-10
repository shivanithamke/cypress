/// <reference types="cypress" />

it('assertion demo',()=>{
    cy.visit('http://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
      .should('contain','Button')
      .and('have.class','query-btn')
      .and('be.visible')
      .and('be.enabled')
      expect(true).to.be.true
      //let name='Querying';
      //expect(name).to.be.equal.to('Querying')
    
})