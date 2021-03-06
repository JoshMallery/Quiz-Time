describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Quiz-Time/')
  })

  it('Has a logo', () => {
    cy.get('img')
      .should('exist')
  });

  it('Has three buttons', () => {
      cy.get('.nav-button')
        .should('have.length',3)
  });

  it('Has a Tag Line', () => {
    cy.get('h2')
      .contains("The place to find Trivia Questions!")
  })

  it('Have Welcome content on the homepage', () => {
    cy.get('h1')
      .contains("Welcome to Quiz Time! All of your Trivia Needs can be had here! Use the navigation links to get started!")
  })

  it('should have a url reflect the current page', () => {
    cy.url()
      .should('eq','http://localhost:3000/Quiz-Time/')
  });

  it('Should be able to navigate to other Pages', () => {
    cy.get('.nav-button')
      .eq(1)
      .click()

    cy.url()
      .should('eq','http://localhost:3000/Quiz-Time/settings')
  });

  it('Should get a 404 message if a wrong URL is navigated to', () => {
    cy.visit('http://localhost:3000/Quiz-Time/invalid')
    cy.get('h2').eq(1).contains('No Trivia here! Use the Navigation Links to get back on your way!')
  })

})
