import React, { useEffect, useState } from 'react';
import { Route , Switch } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import TriviaContainer from "./components/TriviaContainer";
import apiCalls from "./apiCalls.js";
import utilities from "./utilities.js"
import './App.css';
import logoImage from "./images/quizTimeLogo.png"

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const buildQuery = (category,questionCount) => {
    //saving space to later build complex API queries
    //queryParams should be a number of category at this point
    fetchQuestions(category,questionCount)
  }


  const fetchQuestions = (category,questionCount) => {
    apiCalls.getQuestions(category,questionCount)
      .then(response => utilities.cleanText(response))
      .then(cleanResponse => setQuestions(cleanResponse))
      .catch(error => console.log(error)) //change to error set state??
  }

  return (
    <main className="App">
      <header className="header">
        <p>
        Where your trivia needs are served!
        </p>
        <img src={logoImage} alt="Quiz-Time Logo of a stack of books"/>
      </header>
      <div className="content">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="routes">
          {error && <h2>An Error has occured.</h2>}
          <Switch>
            <Route exact path="/" render={() => <p>Home Page</p>} />
            <Route path ="/settings" render={() => <Form buildQuery={buildQuery}/>} />
            <Route path ="/trivia" render={() =>  questions.length === 0 ? <h2>Please go to settings and select your trivia categories first!</h2> : <TriviaContainer questions={questions}/> } />
            <Route render={() => <h2>No Trivia here! Click Home and Try Again!</h2>} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default App;
