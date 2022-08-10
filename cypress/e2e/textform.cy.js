/// <reference types="cypress"/>

import { demologin } from "./pages/demologin";

const practicepage = new demologin();

// beforeEach(() => {
  
// });

describe("textbox", function () {

  // cy.visit('https://demoqa.com/links');
  //   it("textbox", () => {
  //     cy.get(':nth-child(1) > .group-header > .header-wrapper').click()
  //     cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
  //     practicepage.username("shivani");
  //     practicepage.email("thamkeshivani200@gmail.com");
  //     practicepage.address("pune");
  //     practicepage.address1("pune");
  //     practicepage.submit1();
  //   });
  it("checkbox", () => {
    cy.visit('https://demoqa.com/links');
    cy.get(":nth-child(1) > .group-header > .header-wrapper").click();

    cy.get(":nth-child(1) > .element-list > .menu-list > #item-1").click();
    cy.get(".rct-checkbox > .rct-icon").click();
    // cy.get(".rct-collapse").click();
    // cy.get('.rct-node-expanded > :nth-child(1) > label > .rct-checkbox > .rct-icon').click()
    // cy.get("#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > :nth-child(1) > .rct-collapse > .rct-icon"
    // ).click();
    // // cy.get('#leaveList_chkSearchFilter_1').uncheck().should('not.be.checked').and('have.value','1')
    // // cy.get('#leaveList_chkSearchFilter_checkboxgroup').click(['Rejected','Canceled','Pending Approval'])
    // cy.get(
    //   "#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path"
    // ).click();
  });
  it("Radio Button", () => {
    cy.get("input[id=yesRadio]").should('be.checked');
    // cy.get(":nth-child(1) > .element-list > .menu-list > #item-2").click();
    // cy.get(".col-md-6 > :nth-child(2) > :nth-child(2)").click();
  });
});
