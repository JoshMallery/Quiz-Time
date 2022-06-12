import React, { useState } from 'react';
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
  const [prompt, setPrompt] = useState(false)

  // const buildQuery = (category,questionCount) => {
  //   //saving space to later build complex API queries
  //   //queryParams should be a number of category at this point
  //   fetchQuestions(category,questionCount)
  // }


  const fetchQuestions = (category,questionCount) => {
    setPrompt(true)
    apiCalls.getQuestions(category,questionCount)
      .then(response => utilities.cleanText(response))
      .then(cleanResponse => setQuestions(cleanResponse))
      .catch(error => setError(true))
  }

  return (
    <main className="App">
      <header className="header">
        <img src={logoImage} alt="Quiz-Time Logo of a stack of books"/>
        <h2>
        Quiz-Time!
        <br/>
        <br/>
        The place to find Trivia Questions!
        </h2>
      </header>
      <div className="content">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="routes">
          <Switch>
            <Route exact path="/" render={() => <h1>Welcome to Quiz Time! All of your Trivia Needs can be had here! Use the navigation on the left hand side to get started!</h1>} />
            <Route path ="/settings" render={() => <Form fetchQuestions={fetchQuestions} prompt={prompt}/>} />
            <Route path ="/trivia" render={() =>  {
                if(error) {
                  return <h2>Server is Down, Please try again later.</h2>
                } else {
                 return  questions.length === 0 ? <h2>Please go to settings and select your trivia categories first!</h2> : <TriviaContainer questions={questions}/>
               }
              }}
            />
            <Route render={() => <h2>No Trivia here! Use the Navigation Buttons on the Left to get back on your way!</h2>} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default App;
