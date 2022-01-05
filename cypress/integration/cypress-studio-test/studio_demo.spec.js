/* ==== Test Created with Cypress Studio ==== */
it('demoqa_test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/webtables');
  cy.get('#addNewRecordButton').click();
  cy.get('#firstName').clear().type('Juan Jose');
  cy.get('#lastName').clear().type('Castro Castillo');
  cy.get('#userEmail').clear().type('juanjose@gmail.com');
  cy.get('#age').clear().type('65');
  cy.get('#salary').clear().type('8000');
  cy.get('#department').clear().type('Tecnologia');
  cy.get('#submit').click();
  /* ==== End Cypress Studio ==== */
});
