import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function MissedGoal() {
  return <h1>Even</h1>;
}

function MadeGoal() {
  return <h1>Odd!</h1>;
}

function OddEven() {
 const no=5;
 if(no%2 ===0)
 {
  return <MissedGoal />;
 }else{
  return <MadeGoal />;
 }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OddEven />); 

reportWebVitals(console.log);
