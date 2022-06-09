/// <reference types="Cypress" />

describe("Testing of EA app", () => {

    beforeEach("beforeEach for EA site", () => {
        cy.visit("http://www.executeautomation.com/site");

    })

    it("Testing EA site for assertions", () => {
        
        //usage of 'should' - Implicit assertion
        cy.get("[aria-label='jump to slide 2]", {timeout : 6000}).should('have.class','ls-nav-active');
        //usage of ''expect' - Explicit assertion
        cy.get("[aria-label='jump to slide 3]", {timeout : 6000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        });

    })

    it("Testing EA site for assertions - 2nd test case", () => {
        cy.visit("http://www.executeautomation.com/site");

        //usage of ''expect' - Explicit assertion
        cy.get("[aria-label='jump to slide 3]", {timeout : 6000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        });

    })


    it("Login Application", () => {
        cy.visit("http://eaapp.somee.com/");

        cy.contains("Employee");

        //Short way of working with Alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.contains("Login").click();

        //Alias variable used at later time
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql('Login');
        })

        cy.url().should("include","/Account/Login")
        cy.contains("Somee.com");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click();
        cy.get('#logoutForm > .nav > :nth-child(1) > a').should("have.text","Hello admin!")

        //Click Employee List
        cy.contains("Employee List").click();

        cy.get('.table').find('tr').as("rows");
        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple : true});
        })

        //Click on Prashanth's Benefits
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();;


    })

})