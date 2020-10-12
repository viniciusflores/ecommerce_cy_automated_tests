const pageLocators = {
  HOME: {
    SEARCH_BAR: '#search_query_top',
    FN_LINK_PRODUCT_IN_SEARCH_RESULT: product =>
      `a.product-name[title='${product}']`,
  },
  PRODUCT_DETAIL: {
    ADD_TO_CART: '#add_to_cart',
    MODAL_CART: {
      ICON_SUCCESS: '.icon-ok',
      PROCEED_TO_CHECKOUT: 'a.btn[title="Proceed to checkout"]',
    },
  },
  SIGN_IN: {
    USERNAME: '#email',
    PASSWORD: '#passwd',
    SUBMIT_LOGIN: '#SubmitLogin',
  },
  ORDER: {
    TAB: {
      SUMMARY: 'li.step_current.first',
      SIGN_IN: 'li.step_current.second',
      ADDRESS: 'li.step_current.third',
      SHIPPING: 'li.step_current.four',
      PAYMENT: 'li.step_current.last',
    },
    PROCEED_SUMMARY: 'a.standard-checkout[title="Proceed to checkout"]',
    PROCEED_ADDRESS: 'button[name="processAddress"]',
    PROCEED_SHIPPING: 'button[name="processCarrier"]',
    PROCEED_PAYMENT: 'button.button.btn.btn-default.button-medium',
    TERMS_OF_SERVICE: '#uniform-cgv',
    PAYMENT: {
      BANK: '.bankwire',
      BANK_DESCRIPTION: '.page-subheading',
      BANK_MSG_SUCCESS: '.cheque-indent',
    },
  },
};

export default pageLocators;
