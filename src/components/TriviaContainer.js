import React, { useState } from "react";
import Card from "./Card";
import Score from "./Score";
import "./TriviaContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const TriviaContainer = ({questions}) => {
  const [record, setRecord] = useState({ wins:0 , losses:0 }); //wins and losses
  const [count, setCount] = useState(0);

  const checkAns = (ans,current) => {
    ans === questions[current].correct_answer ? calcScore(true) : calcScore(false);
  }

  const questionCards = questions.map((question,index) => <Card key={index} {...question} count={count} curQuestion={index} checkAns={checkAns} />);

  //try having a sort for the answers at this level.

  // const calcScore = (boolean) => {
  //   // if(curQuestion === count) {
  //   //   return
  //   // }
  //   let revisedRecord = {...record};
  //
  //   boolean ? revisedRecord.wins += 1 : revisedRecord.losses += 1;
  //
  //   setRecord({...revisedRecord});
  //   setCount(count + 1);
  // }

  const calcScore = (boolean) => {
    // if(curQuestion === count) {
    //   return
    // }
    // let revisedRecord = {...record};

    boolean ? record.wins += 1 : record.losses += 1;
    setRecord(record);
    setCount(count + 1);
    console.log("record",record)
    console.log("count", count)
  }

  //need to send up answer and sent to check answer component

//scroll down on cards for now? how to cycle through cards on click?
  //curcard on the mappedCards[1] then mappedCards[2] on the render?

//need correct counter
//need total counter? mappedcards.length?

  return (
    <div>
    <Score record={record}/>
        <Carousel showThumbs={false}>
        {questionCards}
        </Carousel>
    </div>
  )

}


export default TriviaContainer;
