import React, { useState, useEffect } from "react"
import "./Card.css"

const Card = ({checkAns,category,correct_answer,incorrect_answers,question, count, curQuestion}) => {
  const [selectedAns, setAnswer] = useState(null);
  const [randomAns, setRandomAns] = useState([])


 useEffect(() => {
   if(!count) {
     let buildRandomAns = [...incorrect_answers,correct_answer]
     buildRandomAns.sort((a, b) => 0.5 - Math.random());
     setRandomAns(buildRandomAns)
    }
  },[count])

  let radioAns = randomAns.map((ans,index) => {
    return (
      <>
        <input onChange={() => onChangeHandler(ans)} key={index} type="radio" id={ans} name="question" value={ans} />
        <label htmlFor={ans}>{ans}</label>
        <br/>
      </>)
    })

  const onChangeHandler = (ans) => {
    setAnswer(ans);
  }

  return (
    <div className="card">
      <p>{question}</p>
      {radioAns}
      <br/>
      <button onClick={() => checkAns(selectedAns,curQuestion)}>Submit Answer</button>
    </div>
  )

}

export default Card;
