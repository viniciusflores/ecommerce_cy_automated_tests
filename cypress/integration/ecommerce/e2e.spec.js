/// <reference types="cypress" />

import page from '../../support/pageLocators';

let username = 'zenviaproject@email.com';
let passwd = 'P@ssw0rd';

describe('first access, use existent user, buy a item', () => {
  beforeEach(() => {
    // access page
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('be.equal', 'My Store');
  });
  it('create a user account', () => {
    // search item
    cy.get(page.HOME.SEARCH_BAR).clear().type('t-shirt{enter}');
    cy.get(
      page.HOME.FN_LINK_PRODUCT_IN_SEARCH_RESULT('Faded Short Sleeve T-shirts'),
    ).click();

    // add to cart and go to checkout
    cy.get(page.PRODUCT_DETAIL.ADD_TO_CART).click();
    cy.get(page.PRODUCT_DETAIL.MODAL_CART.ICON_SUCCESS).should('be.visible');
    cy.get(page.PRODUCT_DETAIL.MODAL_CART.PROCEED_TO_CHECKOUT).click();

    // order page
    cy.get(page.ORDER.TAB.SUMMARY).should('be.visible');
    cy.get(page.ORDER.PROCEED_SUMMARY).click();

    // login
    cy.get(page.ORDER.TAB.SIGN_IN).should('be.visible');
    cy.performLogin(username, passwd);

    // address
    cy.get(page.ORDER.TAB.ADDRESS).should('be.visible');
    cy.get(page.ORDER.PROCEED_ADDRESS).click();

    // shipping
    cy.get(page.ORDER.TAB.SHIPPING).should('be.visible');
    cy.get(page.ORDER.TERMS_OF_SERVICE).click();
    cy.get(page.ORDER.PROCEED_SHIPPING).click();

    // payment
    cy.get(page.ORDER.TAB.PAYMENT).should('be.visible');
    cy.get(page.ORDER.PAYMENT.BANK).click();

    cy.get(page.ORDER.PAYMENT.BANK_DESCRIPTION).should(
      'contain',
      'Bank-wire payment',
    );

    // confirm purchase
    cy.get(page.ORDER.PROCEED_PAYMENT).click();
    cy.get(page.ORDER.PAYMENT.BANK_MSG_SUCCESS).should(
      'contain',
      'Your order on My Store is complete.',
    );
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
});

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
