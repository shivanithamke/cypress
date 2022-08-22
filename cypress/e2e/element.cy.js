/// <reference types="cypress"/>

describe("textbox", function () {
  it.skip("Radio button", () => {
    cy.visit("https://demoqa.com/");
    cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5").click();
    cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-2 > .text"
    ).click();
    cy.get("label[for=yesRadio]").click();
    cy.get("p[class=mt-3]").should("be.visible");
    // cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click()
    // cy.get('label[class=custom-control-label]').click()
  });
  it("Webtable", () => {
    cy.visit("https://demoqa.com/");
    cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5").click();

    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click();
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").type("shiv");
    cy.get("#lastName").type("patil");
    cy.get("#userEmail").type("thamkeshiv@gmail.com");
    cy.get("#age").type("27");
    cy.get("#salary").type("34000");
    cy.get("#department").type("cs");
    cy.get("#submit").click();
    cy.get('div[class=rt-table]').contains(':nth-child(4) > .rt-tr > :nth-child(1)','shiv').should('be.visible')
    cy.get('.ReactTable').contains(':nth-child(4) > .rt-tr > :nth-child(2)','patil').should('be.visible')
    
cy.get('div[class=rt-table] > div.rt-tbody > div:nth-child(1) > div > div:nth-child(5)').contains('10000').should('be.visible')

cy.get('div[class=rt-table] > div.rt-tbody > div:nth-child(2)').each(($e1,index,$list)=>{
  const text=$e1.text()
  if(text.includes("Vega")) 
  {
    cy.get('div[class=rt-table] > div.rt-tbody > div:nth-child(1)').eq(index).then(function(fname)
    {
      const firstname=fname.text()
expect(firstname).to.equal("Cierra")
    })
  } 
})
  });
})

