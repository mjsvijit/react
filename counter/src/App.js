import { Fragment } from 'react';
import './App.css';
import { Counter } from './components/Counter';



function App() {
  return (
    <div className="Fragment"> 
    <div className="App">
    < Counter name="counter 1" />
  
    </div>
    <div className="App1">
    < Counter name="counter 2"/>
    </div>
    </div>
  );
}

export default App;
