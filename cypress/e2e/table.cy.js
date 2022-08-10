/// <reference types="cypress"/>
it("Webtable", () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
//   cy.visit("https://demoqa.com/");
//   cy.get('tbody > :nth-child(2) > :nth-child(3)').click();
//   cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click();
  cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(
    ($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes("Amod")) {
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)')
          .eq(index)
          .then(function (fname) {
            const firstname = fname.text();
            expect(firstname).to.equal("Master In Java");
          });
      }
    }
  );
});
