import React, { useState, useEffect } from "react";
import categories from "./FormData/categories"
import "./Form.css";
console.log(categories)
const Form = ({buildQuery}) => {
  const [category, setCategory] = useState(0)
  const [dropCat, setDropCat] = useState(0)

  let dropOptions = categories.map((item) => <option value={item.id}>{item.category}</option>)
    //need array of category options from the website
  dropOptions.unshift(<option value="0">--Please Select a Category --</option>)
    //map out the categories and their values
    //names are in the brackets
    //values are hidden in the options


  const changeHandler = (event) => {

    event.target.name === "category" ? setCategory(event.target.value) : setDropCat(event.target.value)

  }

  const submitHandler = (event) => {
    event.preventDefault();
    buildQuery(category);
  }


//get the select synta for this one.
  return(
    <div>
    <form>
      <select name="dropCategory" onChange={(event) => changeHandler(event)}>
        {dropOptions}
      </select>

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
