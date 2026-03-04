/// <reference types="cypress" />

const profilePage = {
    customerName: () => { 
        return cy.get('[data-testid="CustomerName"]') 
    }
}

export default profilePage;