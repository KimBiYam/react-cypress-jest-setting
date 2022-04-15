describe("App", () => {
  it("React 공식 문서 링크 존재", () => {
    cy.visit("/");

    cy.contains("Learn React").should("exist");
  });

  it("환경 변수 테스트", () => {
    cy.log(Cypress.env("REACT_APP_API_URL"));
  });
});
