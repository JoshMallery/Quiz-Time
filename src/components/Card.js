import React from "react"
import "./Card.css"

const Card = ({checkAns,category,correct_answer,incorrect_answers,question}) => {
let randomAns = [...incorrect_answers]
  randomAns.push(correct_answer);
  randomAns.sort((a, b) => 0.5 - Math.random());

//map random ans to radio buttons?
  const radioAns = randomAns.map((ans,index) => {
    return (
      <>
        <input type="radio" id={index} name="question" value={ans} />
        {ans}
      </>)
    })
console.log(radioAns)
//have a button to send the answer back up


  return (
    <div className="card">
      <p>{question}</p>
      {radioAns}
    </div>
  )

}

export default Card;
