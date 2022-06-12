import React, { useState } from "react";
import categories from "./FormData/categories";
import PropTypes from 'prop-types';
import "./Form.css";

const Form = ({ fetchQuestions, prompt }) => {
  const [questionAmount, setQuestionAmount] = useState(10)
  const [dropCat, setDropCat] = useState(0)

  let dropOptions = categories.map((item) => <option key={item.id} value={item.id}>{item.category}</option>)
  dropOptions.unshift(<option key="0" value="0">--Please Select a Category --</option>)

  const changeHandler = (event) => {
    event.target.name === "questionAmount" ? setQuestionAmount(event.target.value) : setDropCat(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    fetchQuestions(dropCat, questionAmount);
  }

  return(
    <div>
      <form>
        <p>Trivia Categories to select from: </p>
        <select name="dropCategory" onChange={(event) => changeHandler(event)}>
          {dropOptions}
        </select>
        <br/>
        <br/>
        <p>Select the number of Trivia questions:</p>
        <input
          name="questionAmount"
          type="number"
          min="1"
          max="50"
          value={questionAmount}
          onChange={(event) => changeHandler(event)}
        />
        <br/>
        <br/>
        <button onClick={(event)=> submitHandler(event)}>Submit!</button>
      </form>
      {prompt && <h2>Time to go play trivia! Click the Play Trivia Link to Begin!</h2>}
    </div>
  )


}

export default Form;

Form.propTypes = {
  fetchQuestions: PropTypes.func,
  prompt: PropTypes.bool
};
