import React, { useState, useEffect } from "react"
import "./Card.css"

const Card = ({checkAns,category,correct_answer,incorrect_answers,question, count}) => {
  const [selectedAns, setAnswer] = useState(null);
  let randomAns
  let radioAns

    randomAns = [...incorrect_answers,correct_answer]

    // randomAns.sort((a, b) => 0.5 - Math.random()); need a way to sort once or feed it sorted data

    radioAns = randomAns.map((ans,index) => {
      return (
        <>
        <input onChange={() => onChangeHandler(ans)} key={index} type="radio" id={ans} name="question" value={ans} />
        <label htmlFor={ans}>{ans}</label>
        </>)
      })



const onChangeHandler = (ans) => {
  setAnswer(ans);
}
//map random ans to radio buttons?
//have a button to send the answer back up
// const onClickHandler = (ans) => {
//   radioAns.find(eachAns => eachAns.checked )
//   checkAns(ans)
// }


  return (
    <div className="card">
      <p>{question}</p>
      {radioAns}
      <button onClick={() => checkAns(selectedAns)}>Submit Answer</button>
    </div>
  )

}

export default Card;
