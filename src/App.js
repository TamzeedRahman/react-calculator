import React from 'react';
import './App.css';
import Delete from './components/Delete'
import Equals from './components/Equals'
import Input from './components/Input'
import Number from './components/Number'
import Operation from './components/Operation'
import Results from './components/Results'

class App extends React.Component {
  constructor() {
   super();
   this.state = {
     recentlyPressedValue: "",
     recentOperation: "",
     input: 0,
     result: "",
     positive: true
   }
  }

  calculateResults = () => {}

  inputNumber = () => {}

  inputOperations = () => {}

  render() {
    return (
      <div className="calculator">
        <section className="results-container">
          <Input digit={this.state.recentlyPressedValue} />
          <Results result={this.state.result} />
        </section>
        <section className="numbers-container">
        <Number value={1}/>
        <Number value={2}/>
        <Number value={3}/>
        <Number value={4}/>
        <Number value={5}/>
        <Number value={6}/>
        <Number value={7}/>
        <Number value={8}/>
        <Number value={9}/>
        <Number value={0}/>
        <Number value="."/>
        </section>
        <section className="operations-container">
          <Operation op="x" />
          <Operation op="%" />
          <Operation op="+" />
          <Operation op="-" />
        </section>
        <section className="eq-container">
          <Clear />
          <Delete />
          <Equals />
          <PositiveNegative />
        </section>  
      </div>
    )
  }
}

export default App;
