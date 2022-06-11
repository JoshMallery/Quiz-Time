describe('Trivia Page Tests', () => {
  beforeEach(() => {
    cy.intercept('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple', { fixtures: "questions" }) //actually not needed for home page test
    cy.visit('http://localhost:3000/Quiz-Time/settings')
    //get drop down and select general then click the button to fetch
  })

    it('Has a logo', () => {
      cy.get('img')
        .should('exist')
    });

    it('Has three buttons', () => {
        cy.get('.nav-button')
          .should('have.length',3)
    });



    it.skip('has a drop down menu with XX items', () => {

    });

    it.skip('After selecting a drop down menu item and clicking submit, a message should appear.' () => {

    });



    it.skip('should have a message if it can not fetch results', () => {

    })
})
