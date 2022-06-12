import React from "react";
import PropTypes from 'prop-types';
import "./Score.css";

const Score = ({ record }) => {

  return (
    <div className="score">
      <br/>
      <p>Correct Questions: {record.wins}</p>
      <p>Incorrect Questions: {record.losses}</p>
      <p>Total questions: {record.wins + record.losses}</p>
      <br/>
    </div>
  )

}

export default Score;

Score.propTypes = {
  record: PropTypes.object
};
