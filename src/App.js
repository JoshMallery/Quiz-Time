import React, { useEffect, useState } from 'react';
import { Route , Switch } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import TriviaContainer from "./components/TriviaContainer";
import apiCalls from "./apiCalls.js";
import './App.css';

//hold fetched questions
//have fetch calls
//have fetch call logic.



const App = () => {
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
          <Switch>
            <Route exact path="/" render={() => <p>Home Page</p>} />
            <Route path ="/settings" render={() => <Form />} />
            <Route path ="/trivia" render={() => <TriviaContainer />} />
            <Route render={() => <h2>No Trivia here! Click Home and Try Again!</h2>} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default App;
