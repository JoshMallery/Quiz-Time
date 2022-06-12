import React, { useState, useEffect } from "react";
import "./Card.css";
import PropTypes from 'prop-types';


const Card = ({checkAns,category,correct_answer,incorrect_answers,question, count, curQuestion}) => {
  const [selectedAns, setAnswer] = useState(null);
  const [randomAns, setRandomAns] = useState([]);

 useEffect(() => {
   if(!count) {
     let buildRandomAns = [...incorrect_answers,correct_answer]
     buildRandomAns.sort((a, b) => 0.5 - Math.random());
     setRandomAns(buildRandomAns)
    }
  },[count])

  let radioAns = randomAns.map((ans,index) => {
    return (
      <div key={index}>
        <input onChange={() => onChangeHandler(ans)} type="radio" id={ans} name="question" value={ans} />
        <label htmlFor={ans}>{ans}</label>
        <br/>
      </div>)
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

Card.propTypes = {
  checkAns: PropTypes.func,
  category: PropTypes.string,
  correct_answer: PropTypes.string,
  incorrect_answers: PropTypes.array,
  question: PropTypes.string,
  count: PropTypes.number,
  curQuestion: PropTypes.number
};
