import page from './pageLocators';

Cypress.Commands.add('performLogin', (email, password) => {
  cy.get(page.SIGN_IN.USERNAME).type(email);
  cy.get(page.SIGN_IN.PASSWORD).type(password);
  cy.get(page.SIGN_IN.SUBMIT_LOGIN).click();
});
