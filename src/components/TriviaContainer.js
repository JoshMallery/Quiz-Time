import React, { useState, useEffect} from "react";
import Card from "./Card";
import Score from "./Score";
import "./TriviaContainer.css";

const TriviaContainer = () => {

//need way to start the game
  //need prop of questions
  //meed map of question cards
  //need to send up answer and sent to scoring component


//scroll down on cards for now? how to cycle through cards on click?
  //curcard on the mappedCards[1] then mappedCards[2] on the render?


//need correct counter
//need total counter? mappedcards.length?

  return (
    <div>
      <Card />
      <Score />

    </div>

  )

}


export default TriviaContainer;
