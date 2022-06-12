describe('Trivia Page Tests', () => {
  beforeEach(() => {
    cy.intercept('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple', {fixture:'questions.json'}).as('triviaQuestions')
    cy.visit('http://localhost:3000/Quiz-Time/settings')
    cy.get('select').select(5)
    cy.get('input').type("{backspace}{backspace}5")
    cy.get('button').click()
    cy.wait('@triviaQuestions')
    cy.get('.nav-button').eq(2).click()
  })

    it('Has a logo', () => {
      cy.get('img')
        .should('exist')
    });

    it('Has three buttons', () => {
        cy.get('.nav-button')
          .should('have.length',3)
    });

    it('should display the first trivia question', () => {
        cy.get('.card').contains("Who had a 1983 hit with the song 'Africa'?")
    });

    it('should display scores', () => {
      cy.get('.score').should('exist')
    });

    it('should update score if question is correct', () => {
      cy.get('[type="radio"]').eq(0).check()
      cy.get('button').eq(1).click()
      cy.get('.score').children().contains('Correct Questions:')
      cy.get('.score').children().contains('Total questions: 1')

    })

    it('should update score if question is incorrect', () => {
      cy.get('[type="radio"]').eq(1).check()
      cy.get('button').eq(1).click()
      cy.get('.score').children().contains('Incorrect Questions:')
      cy.get('.score').children().contains('Total questions: 1')

    })

    it('should be able to cycle to the next question and answer it too.', () => {
      cy.get('[type="radio"]').eq(0).check()
      cy.get('button').eq(1).click()
      cy.get('.control-next').click()

      cy.get('[type="radio"]').eq(6).check({force: true})
      cy.get('button').eq(3).click()

      cy.get('.score').children().contains('Correct Questions: ')
      cy.get('.score').children().contains('Incorrect Questions: ')
      cy.get('.score').children().contains('Total questions: 2')
    })



    it.skip('should have a message if it can not fetch results', () => {
      cy.intercept("GET",'https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple', {
              statusCode: 500,
              body: {
              message: 'Server error. Please try again'
              }

    })

    it.skip('should have a message if the fetched results haven\'t loaded yet', () => {


    })

  })
})
