describe('Trivia Page Tests', () => {
  beforeEach(() => {
    cy.intercept('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple', { fixtures: "questions" }) //actually not needed for home page test
    cy.visit('http://localhost:3000/Quiz-Time/settings')
    //get drop down and select general then click the button to fetch
  })

    it('Has a logo', () => {
      cy.get('.logo').should('have.attr', 2)
    });

    it('has a dropdown menu', () => {

    });

    it('has a drop down menu with XX items', () => {

    });

    it('After selecting a drop down menu item and clicking submit, a message should appear.' () => {

    });

    it('should have a url reflect the current page', () => {

    });

    it('should have a message if it can not fetch results', () => {

    })
