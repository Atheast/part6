import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const rates = useSelector(state => state);

  return (
    <div className="App">
      <div>
        <p>Good: {rates.good}</p>
        <p>Neutral: {rates.neutral}</p>
        <p>Bad: {rates.bad}</p>
      </div>
      <div>
        <button onClick={() => dispatch({type: 'GOOD'})}>Good</button>
        <button onClick={() => dispatch({type: 'NEUTRAL'})}>Neutral</button>
        <button onClick={() => dispatch({type: 'BAD'})}>Bad</button>
        <button onClick={() => dispatch({type: 'ZERO'})}>Zero</button>
      </div>
    </div>
  );
};


export default App;