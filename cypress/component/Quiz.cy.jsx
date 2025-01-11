import Quiz from "../../client/src/components/Quiz.tsx";

describe("Quiz", () => {
  beforeEach(() => {
    cy.intercept(
      { method: "GET", url: "/api/questions/random" },
      { fixture: "questions.json", statisCode: 200 }
    ).as("getRandomQuestion");
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
  });

  it("renders with a question", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz");
  });

  it("allows click", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
  });

  it("renders with an alert", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get("button").contains("1").click();
    cy.get(".alert").should("be.visible");
  });

  it("restarts quiz", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("Take New Quiz").click();
    cy.get(".card").should("be.visible");
  });
});
