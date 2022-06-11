import React, { useState, useEffect } from "react";
import categories from "./FormData/categories"
import "./Form.css";

const Form = ({buildQuery}) => {
  const [questionAmount, setQuestionAmount] = useState(0)
  const [dropCat, setDropCat] = useState(0)

  let dropOptions = categories.map((item) => <option key={item.id} value={item.id}>{item.category}</option>)
  dropOptions.unshift(<option key="0" value="0">--Please Select a Category --</option>)

  const changeHandler = (event) => {
    event.target.name === "questionAmount" ? setQuestionAmount(event.target.value) : setDropCat(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    buildQuery(dropCat);
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
          value={questionAmount}
          placeholder="Number of questions"
          onChange={(event) => changeHandler(event)}
        />
        <br/>
        <br/>
        <button onClick={(event)=> submitHandler(event)}>Submit!</button>
      </form>

    </div>
  )


}

export default Form;
