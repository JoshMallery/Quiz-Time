import React from "react"
import "./Card.css"

const Card = ({checkAns,category,correct_answer,incorrect_answers}) => {
let randomAns = [...incorrect_answers]
  randomAns.push(correct_answer);
  randomAns.sort((a, b) => 0.5 - Math.random());

//take in props of question, right answer, wrong answers, onclick function to send answer up
//can I randomize the wrong and right answers?
//have the question
//have 4 answers
//have a button to send the answer back up


  return (
    <div className="card">
      I am a trivia question, i will look cool with lots of neat CSS.
    </div>
  )

}

export default Card;
