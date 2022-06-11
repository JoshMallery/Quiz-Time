import React , { useEffect } from "react"
import "./Score.css"

const Score = ({ record }) => {

//pass down if right or wrong,
//if right say correct
//if wrong give correct answer
//give updated score? score passed as prop

//look at previous score? i wins increased say correct, if losses increased say incorrect?

useEffect(()=> {


},[record])

  return (
    <div className="score">
      <p>Correct Questions: {record.wins}</p>
      <p>Incorrect Questions: {record.losses}</p>
      <p>Total questions: {record.wins + record.losses}</p>
    </div>
  )

}

export default Score;
