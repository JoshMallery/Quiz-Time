import React, { useEffect, useState } from 'react';
import { Route , Switch } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import TriviaContainer from "./components/TriviaContainer";
import apiCalls from "./apiCalls.js";
import './App.css';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState("");
    //hold fetched questions - done
    //have fetch calls - done
    //have fetch call logic. - done for now
    //for now just need to take in a number
  const buildQuery = (queryParams) => {
    //saving space to later build complex API queries
    //queryParams should be a number of category at this point
    fetchQuestions(queryParams)
  }


  const fetchQuestions = (category) => {
    console.log(category)
    apiCalls.getQuestions(category)
      .then(response => setQuestions(response))//set state of questions to response)
      .catch(error => console.log(error)) //change to error set state??
  }

  return (
    <main className="App">
      <header className="header">
        <p>
        It's Quizzzzzz Time Y'alllll
        </p>
      </header>
      <div className="content">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="routes">
          { error && <h2></h2> }
          <Switch>
            <Route exact path="/" render={() => <p>Home Page</p>} />
            <Route path ="/settings" render={() => <Form buildQuery={buildQuery}/>} />
            <Route path ="/trivia" render={() => { questions.length === 0 ? <h2>Please go to settings and select your trivia categories first!</h2> : <TriviaContainer questions={questions}/> }} />
            <Route render={() => <h2>No Trivia here! Click Home and Try Again!</h2>} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default App;
