describe("visible main page ", () => {
    beforeEach(() => {
        cy.visit('http://qamid.tmweb.ru')
      });
    
    
    it("Home page visible", () => {
    cy.get(".page-nav__day").should("have.length", 7);
    
    })
    it("Visible home title", () => {
    cy.get('.page-header__title').should("be.visible");
    });
    });
    
    
    
    