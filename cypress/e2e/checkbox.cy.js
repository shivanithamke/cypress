/// <reference types="cypress"/>
describe("UI element", function () {
  it("check checkbox", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
    cy.get("input[name=txtUsername]")
      .should("be.visible")
      .should("be.enabled")
      .type("Admin");
    cy.get("input[name=txtPassword]")
      .should("be.visible")
      .should("be.enabled")
      .type("admin123");
    cy.get("input[name=Submit]")
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.get("#menu_leave_viewLeaveModule > b").click();
    cy.get('#leaveList_chkSearchFilter_-1')
      .click()
      .should("be.checked")
      .and("have.value", "-1");
      cy.get('#leaveList_chkSearchFilter_0').check().should('be.checked').and('have.value','0')
      cy.get('#leaveList_chkSearchFilter_1').uncheck().should('not.be.checked').and('have.value','1')
      cy.get('#leaveList_chkSearchFilter_checkboxgroup').click(['Rejected','Canceled','Pending Approval'])
     // cy.get('input[name=leaveList[chkSearchFilter][]]').check(['Rejected','Canceled','Pending Approval'])
     cy.get('#leaveList_cmbSubunit').select('Administration').should('have.value','2')//dropdown
     cy.get('#leaveList_txtEmployee_empName').type('a').type('{enter}')
  });
    
    
});
