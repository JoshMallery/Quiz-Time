import React, { useState } from 'react';
import { Route , Switch } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import TriviaContainer from "./components/TriviaContainer";
import apiCalls from "./apiCalls.js";
import utilities from "./utilities.js"
import logoImage from "./images/quizTimeLogo.png"
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState(false)

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
        <h2 className="heading-text">
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
            <Route exact path="/" render={() => <h1>Welcome to Quiz Time! All of your Trivia Needs can be had here! Use the navigation links to get started!</h1>} />
            <Route path ="/settings" render={() => <Form fetchQuestions={fetchQuestions} prompt={prompt}/>} />
            <Route path ="/trivia" render={() =>  {
                if(error) {
                  return <h2>Server is Down, Please try again later.</h2>
                } else {
                 return  questions.length === 0 ? <h2>Please go to settings and select your trivia categories first!</h2> : <TriviaContainer questions={questions}/>
               }
              }}
            />
            <Route render={() => <h2>No Trivia here! Use the Navigation Links to get back on your way!</h2>} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default App;
