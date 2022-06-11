describe('Settings Page Tests', () => {
  beforeEach(() => {
    cy.intercept('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple', { fixtures: "questions" }) //actually not needed for home page test
    cy.visit('http://localhost:3000/Quiz-Time/settings')
  })

  it('Has a logo', () => {
    cy.get('.logo').should('have.attr', 2)
  });
