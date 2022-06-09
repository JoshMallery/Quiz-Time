import React, { useState, useEffect} from "react";
import Card from "./Card";
import Score from "./Score";
import "./TriviaContainer.css";

const TriviaContainer = ({questions}) => {
  const [record, setRecord] = useState({ wins:0 , losses:0 }) //wins and losses
  const [count, setCount] = useState(0)
  const questionCards = questions.map(question => <Card question={question} />)



  const calcScore = (boolean, questionNumber) => {
    if(questionNumber === count){
      return
    }

    setCount(count + 1);

    let revisedRecord = {...record};

    boolean ? revisedRecord.wins += 1 : revisedRecord.losses += 1;

    setRecord({...revisedRecord});
  }

  console.log(calcScore(true,1))
  console.log(record)
  //need to send up answer and sent to scoring component

//scroll down on cards for now? how to cycle through cards on click?
  //curcard on the mappedCards[1] then mappedCards[2] on the render?

//need correct counter
//need total counter? mappedcards.length?

  return (
    <div>
      {questionCards}
      <Score record={record}/>
    </div>

  )

}


export default TriviaContainer;
