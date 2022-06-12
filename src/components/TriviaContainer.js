import React, { useState } from "react";
import Card from "./Card";
import Score from "./Score";
import "./TriviaContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //require a loader???
import { Carousel } from 'react-responsive-carousel';


const TriviaContainer = ({ questions }) => {
  const [record, setRecord] = useState({ wins:0 , losses:0 });
  const [count, setCount] = useState(0);

  const checkAns = (ans,current) => {
    ans === questions[current].correct_answer ? calcScore(true) : calcScore(false);
  }

  const questionCards = questions.map((question,index) => <Card key={index} {...question} count={count} curQuestion={index} checkAns={checkAns} />);

  const calcScore = (boolean) => {
    boolean ? record.wins += 1 : record.losses += 1;
    setRecord(record);
    setCount(count + 1);
  }

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
