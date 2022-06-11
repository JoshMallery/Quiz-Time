describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.intercept('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple', { fixtures: "questions" }) //actually not needed for home page test
    cy.visit('http://localhost:3000/Quiz-Time/')
  })

  it('Has a logo', () => {
    cy.get('.logo').should('have.attr', 2)
  });

  it.skip('Has three buttons', () => {

  });

  it.skip('Has a Tag Line', () => {

  })

  it.skip('Have content on the homepage', () => {

  })

  it.skip('should have a url reflect the current page', () => {

  });

})
