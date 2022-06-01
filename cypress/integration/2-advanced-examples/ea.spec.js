/// <reference types="Cypress" />

describe("Testing of EA app", () => {

    it("Login Application", () => {
        cy.visit("http://eaapp.somee.com/");

        cy.contains("Employee");
        cy.contains("Login").click();
        cy.url().should("include","/Account/Login")
        cy.contains("Somee.com");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click();
        cy.get('#logoutForm > .nav > :nth-child(1) > a').should("have.text","Hello admin!")

        //Click Employee List
        cy.contains("Employee List").click();

        //Click on Prashanth's Benefits
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();


    })

})