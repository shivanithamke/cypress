/// <reference types="cypress"/>

describe('UI element',()=>{

    it('Verify Url',()=>{
    cy.visit('http://opensource-demo.orangehrmlive.com/')
    cy.url().should('include','orangehrmlive')//verify url include orangehrmlive text or not
     cy.get('input[name=txtUsername]').should('be.visible').should('be.enabled').type("Admin")
     cy.get('input[name=txtPassword]').should('be.visible').should('be.enabled').type("admin123")
     cy.get('input[name=Submit]').should('be.visible').should('be.enabled').click()
     cy.title().should('equal','OrangeHRM')//title verification
     cy.get('#menu_leave_viewLeaveModule > b').click()
     cy.get('input[id=leaveList_chkSearchFilter_-1]').should('be.visible').should('not.be.checked')
     cy.get('input[id=leaveList_chkSearchFilter_1]').should('be.visible').should('be.checked')
    })

})