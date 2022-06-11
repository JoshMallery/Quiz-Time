const apiCalls = {

  getQuestions(category) {
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`)
      .then(response => {
        if(!response.ok) {
          throw Error (response)
        }
          return response.json()
        }) //utilities file will work with cleaning and removing the & and apostrophes from the data
      .then(response => response.results)
  }

}

export default apiCalls;
