const apiCalls = {

  getQuestions(category) {
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`)
      .then(response => response.json())
      .then(response => response.results)
      .catch(error => console.log(error))
  }

}

export default apiCalls;
