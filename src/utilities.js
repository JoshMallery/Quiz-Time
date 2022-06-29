const utilities = {

  cleanText(response) {
    const cleanedResponse = response.map(triviaQuestion => {
      triviaQuestion.question = this.stringCleaner(triviaQuestion.question)
      triviaQuestion.correct_answer = this.stringCleaner(triviaQuestion.correct_answer)
      triviaQuestion.incorrect_answers = this.arrayCleaner(triviaQuestion.incorrect_answers)
      return triviaQuestion;
    })
    return cleanedResponse;
  },

  arrayCleaner(arrayToClean) {
    let cleanedArray = arrayToClean.map(singleString=> {
      return this.stringCleaner(singleString);
    });
    return cleanedArray;
  },

  stringCleaner(stringToClean) {
    // eslint-disable-next-line
    let cleanedString = stringToClean.replace(/&quot;/ig,'\"');
    // eslint-disable-next-line
        cleanedString = cleanedString.replace(/&#039;/ig,"\'");
    // eslint-disable-next-line
        cleanedString = cleanedString.replace(/&amp;/ig,"\&");
    return cleanedString;
  }

};

export default utilities;
