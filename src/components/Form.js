import React, { useState, useEffect } from "react";
import categories from "./FormData/categories"
import "./Form.css";

const Form = ({buildQuery}) => {
  const [category, setCategory] = useState(0)
  const [dropCat, setDropCat] = useState(0)

  let dropOptions = categories.map((item) => <option key={item.id} value={item.id}>{item.category}</option>)
  dropOptions.unshift(<option key="0" value="0">--Please Select a Category --</option>)

  const changeHandler = (event) => {
    event.target.name === "category" ? setCategory(event.target.value) : setDropCat(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    buildQuery(category);
  }

  return(
    <div>
      <form>
        <select name="dropCategory" onChange={(event) => changeHandler(event)}>
          {dropOptions}
        </select>
        <br/>
        <input
          name="category"
          type="number"
          min="9"
          value={category}
          placeholder="write a number of category"
          onChange={(event) => changeHandler(event)}
        />
        <button onClick={(event)=> submitHandler(event)}>Submit!</button>
      </form>
      <p>Form checking in!!</p>
    </div>
  )


}

export default Form;
