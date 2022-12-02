describe('Adicionar itens no carrinho', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')

   //item 1
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(2)
    cy.get('.single_add_to_cart_button').click()

    //item 2
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-2622 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()

   //item 3
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-3528 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-33').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()

    //mensagem de sucesso
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', " no seu carrinho.")

    //ver itens no carrinho
    cy.get('.woocommerce-message > .button').click()
  })
})