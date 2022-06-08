describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.intercept('')
    cy.visit('http://localhost:3000/Quiz-Time/')
  })

  it('Has a logo', () => {
    cy.get('.logo').should('have.attr', 2)
  });


})
