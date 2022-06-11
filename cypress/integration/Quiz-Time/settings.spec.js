describe('Settings Page Tests', () => {
  beforeEach(() => {
    cy.intercept('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple', { fixtures: "questions" }) //actually not needed for home page test
    cy.visit('http://localhost:3000/Quiz-Time/settings')
  })

  it('Has a logo', () => {
    cy.get('img')
      .should('exist')
  });

  it('Has three buttons', () => {
      cy.get('.nav-button')
        .should('have.length',3)
  });

  it('has a dropdown input', () => {
    cy.get('select').should('exist');
  });

  it('has 26 items in the drop down input', () => {
    cy.get('option').should('have.length', 26)
  })

  it('has a numbers input', () => {
    cy.get('input').invoke('attr', 'type')
    .should('eq', 'number');
  });


it('should be able to select trivia and submit it', () => {
  cy.get('select').select(5)

  cy.get('input').type("{backspace}{backspace}5")

  cy.get('button').click()

  cy.get('h2').eq(1).contains("Time to go play trivia! Click the Play Trivia Link on the left to Begin!")
})


  it('should have a url reflect the current page', () => {
    cy.url()
      .should('eq','http://localhost:3000/Quiz-Time/settings')
  });

  it('Should be able to navigate to other Pages', () => {
    cy.get('.nav-button')
      .eq(0)
      .click()

    cy.url()
      .should('eq','http://localhost:3000/Quiz-Time/')
  });

})
