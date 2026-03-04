/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json');
const { profilePage } = require('../support/Pages/profile.page');

context('Dado que estou na página de inicial', () => {

  beforeEach(() => {
    cy.login(email, senha);
  });
  context('Quando faço login com credenciais válidas', () => {

    it('Então o nome do usuario deve aparecer na pagina de Perfil', () => {
      profilePage.customerName().should('have.text', 'EBAC Cliente')
    })

  })
})
