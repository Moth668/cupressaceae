describe('Quiz', () => {
  beforeEach(() => {
    cy.visit("/");});

  it("renders with a question", () => {
    cy.get("button").contains("Start Quiz");
  });

  it("allows click", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
  });

  it("renders with an alert", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get("button").contains("1").click();
    cy.get(".alert").should("be.visible");
  });

  it("restarts quiz", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("Take New Quiz").click();
    cy.get(".card").should("be.visible");
  });
});