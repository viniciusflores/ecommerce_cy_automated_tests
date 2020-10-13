/// <reference types="cypress" />

import page from '../../support/pageLocators';

let username = 'zenviaproject@email.com';
let passwd = 'P@ssw0rd';

describe('Rules in SignIn page', () => {
  beforeEach(() => {
    // access page
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('be.equal', 'My Store');
  });
  it('Should be validate email required', () => {
    cy.get(page.HOME.SIGN_IN).click();
    cy.get(page.SIGN_IN.SUBMIT_LOGIN).click();
    cy.get(page.SIGN_IN.ERROR_MSG).should(
      'contain',
      'An email address required.',
    );
  });

  it('Should be validate email invalid', () => {
    cy.get(page.HOME.SIGN_IN).click();
    cy.get(page.SIGN_IN.USERNAME).type('fake-mail');
    cy.get(page.SIGN_IN.SUBMIT_LOGIN).click();
    cy.get(page.SIGN_IN.ERROR_MSG).should('contain', 'Invalid email address.');
  });

  it('Should be validate password required', () => {
    cy.get(page.HOME.SIGN_IN).click();
    cy.get(page.SIGN_IN.USERNAME).type(username);
    cy.get(page.SIGN_IN.SUBMIT_LOGIN).click();
    cy.get(page.SIGN_IN.ERROR_MSG).should('contain', 'Password is required.');
  });

  it('Should be validate password invalid', () => {
    cy.get(page.HOME.SIGN_IN).click();
    cy.get(page.SIGN_IN.USERNAME).type(username);
    cy.get(page.SIGN_IN.PASSWORD).type('fake-pass');
    cy.get(page.SIGN_IN.SUBMIT_LOGIN).click();
    cy.get(page.SIGN_IN.ERROR_MSG).should('contain', 'Authentication failed.');
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
});
