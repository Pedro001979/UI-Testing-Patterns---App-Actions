/// <reference types="cypress" />

const { email , senha } = require('../fixtures/data.json');
const { profilePage } = require('../support/Pages/profile.page');

describe('Teste de Autenticação', () => {

  it('Deve fazer o login com sucesso', () => {
    cy.login(email, senha);
    profilePage.customerName().should('have.text', 'EBAC Cliente')
  })
})