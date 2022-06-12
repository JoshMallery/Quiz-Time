const apiCalls = {

  getQuestions(category,questionCount) {
    return fetch(`https://opentdb.com/api.ph?amnt=${questionCount}&category=${category}&difficulty=easy&type=multiple`)
      .then(response => {
        if(!response.ok) {
          throw Error (response)
        }
          return response.json()
        })
      .then(response => response.results)
  }

}

export default apiCalls;
