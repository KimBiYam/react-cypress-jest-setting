describe("App", () => {
  it("React 공식 문서 링크 존재", () => {
    cy.visit("/");

    cy.contains("Learn React").should("exist");
  });
});
