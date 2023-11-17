describe("admin login ", () => {
    beforeEach(() => {
      cy.visit("http://qamid.tmweb.ru/admin");
    });
     it("Should successfully login", () => {
      cy.login("qamid@qamid.ru" , "qamid");
      cy.get('.page-header').should("be.visible");
     });
     it("Should not login with empty password", () => {
      cy.contains('E-mail').type("qamid@qamid.ru");
      cy.contains('Пароль').type("12");
      cy.get('.login__button').click();
      cy.contains('Ошибка авторизации').should("be.visible");
     });
     it ("Should not login with empty login", () => {
      cy.contains('E-mail').type("amid@qami.ru");
      cy.contains('Пароль').type("qamid")
      cy.get('.login__button').click();
      cy.contains('Ошибка авторизации').should("be.visible");
     });
    });