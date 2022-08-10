/// <reference types="cypress" />

it('implicity assertion',()=>{
     cy.visit('http://opensource-demo.orangehrmlive.com/')
     cy.get('#txtUsername').type('Admin')
     cy.get('#txtPassword').type('admin123')
     cy.get('#btnLogin').click()
    //  cy.get('.gLFyf').type('sql select query example{enter}')
    //  cy.contains('SQL SELECT Statement - W3Schools').click()
    // cy.get('[style="width: 600px; transition: height 300ms ease-in-out 0s;"] > .jtfYYd > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
    
    
    
    
});