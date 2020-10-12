/// <reference types="cypress" />

describe('first access, use existent user, buy a item', () => {
  it('create a user account', () => {
    // access page
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('be.equal', 'My Store');

    // search item
    cy.get('#search_query_top').clear().type('t-shirt{enter}');
    cy.get("a.product-name[title='Faded Short Sleeve T-shirts']").click();

    cy.get('#add_to_cart').click();
    cy.get('.icon-ok').should('be.visible');
    cy.get('a.btn[title="Proceed to checkout"]').click();

    cy.get('li.step_current.first').should('be.visible');
    cy.get('a.standard-checkout[title="Proceed to checkout"]').click();

    cy.get('li.step_current.second').should('be.visible');
    cy.get('#email').type('zenviaproject@email.com');
    cy.get('#passwd').type('P@ssw0rd');
    cy.get('#SubmitLogin').click();

    cy.get('li.step_current.third').should('be.visible');
    cy.get('button[name="processAddress"]').click();

    cy.get('li.step_current.four').should('be.visible');
    cy.get('#uniform-cgv').click();
    cy.get('button[name="processCarrier"]').click();

    cy.get('li.step_current.last').should('be.visible');
    cy.get('.bankwire').click();

    cy.get('.page-subheading').should('contain', 'Bank-wire payment');
    // .then(text => {
    //   assert.equal(text, 'BANK-WIRE PAYMENT.');
    // });

    cy.get('button.button.btn.btn-default.button-medium').click();
    cy.get('.cheque-indent').should(
      'contain',
      'Your order on My Store is complete.',
    );
  });
});
