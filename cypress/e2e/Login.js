/// <reference types="cypress" />

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import profilePage from '../support/Pages/profile.page';

Given('que estou na Tela inicial', () => {
  cy.setCookie('ebacStoreVersion', 'V2', { domain: 'lojaebac.ebaconline.art.br' })
  cy.visit('/')
})

When('eu faço o login com usuario {string} e senha {string}', (email, senha) => {
    cy.login(email, senha)
})

Then('o nome do usuario deve aparecer na página de perfil', () => {
    profilePage.customerName().should('have.text', 'EBAC Cliente')
})
