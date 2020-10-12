/// <reference types="cypress" />

import page from '../../support/pageLocators';

describe('first access, use existent user, buy a item', () => {
  it('create a user account', () => {
    // access page
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('be.equal', 'My Store');

    // search item
    cy.get(page.HOME.SEARCH_BAR).clear().type('t-shirt{enter}');

    cy.get(
      page.HOME.FN_LINK_PRODUCT_IN_SEARCH_RESULT('Faded Short Sleeve T-shirts'),
    ).click();

    cy.get(page.PRODUCT_DETAIL.ADD_TO_CART).click();
    cy.get(page.PRODUCT_DETAIL.MODAL_CART.ICON_SUCCESS).should('be.visible');
    cy.get(page.PRODUCT_DETAIL.MODAL_CART.PROCEED_TO_CHECKOUT).click();

    cy.get(page.ORDER.TAB.SUMMARY).should('be.visible');
    cy.get(page.ORDER.PROCEED_SUMMARY).click();

    cy.get(page.ORDER.TAB.SIGN_IN).should('be.visible');
    cy.get(page.SIGN_IN.USERNAME).type('zenviaproject@email.com');
    cy.get(page.SIGN_IN.PASSWORD).type('P@ssw0rd');
    cy.get(page.SIGN_IN.SUBMIT_LOGIN).click();

    cy.get(page.ORDER.TAB.ADDRESS).should('be.visible');
    cy.get(page.ORDER.PROCEED_ADDRESS).click();

    cy.get(page.ORDER.TAB.SHIPPING).should('be.visible');
    cy.get(page.ORDER.TERMS_OF_SERVICE).click();
    cy.get(page.ORDER.PROCEED_SHIPPING).click();

    cy.get(page.ORDER.TAB.PAYMENT).should('be.visible');
    cy.get(page.ORDER.PAYMENT.BANK).click();

    cy.get(page.ORDER.PAYMENT.BANK_DESCRIPTION).should(
      'contain',
      'Bank-wire payment',
    );

    cy.get(page.ORDER.PROCEED_PAYMENT).click();
    cy.get(page.ORDER.PAYMENT.BANK_MSG_SUCCESS).should(
      'contain',
      'Your order on My Store is complete.',
    );
  });
});
