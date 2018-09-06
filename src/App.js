import React from 'react'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      display: '',
      history: []
    }
  }

  trackHistory () {
    let display = this.state.display
    let result = eval(this.state.display)
    this.setState({ history: this.state.history.concat(`${display} = ${result}`), display: result })
  }

  render () {
    return (
      <div className='App'>
        <h1 className='App-title'>Calculator with History</h1>

        <div className='row'>
          <button className='button' id='clear' onClick={() => this.setState({ display: '' })}>C</button>
          <div id='display'>
            {this.state.display}
          </div>
        </div>

        <div className='row'>
          <button className='button' id='seven' onClick={() => this.setState({ display: this.state.display + '7' })}>7</button>
          <button className='button' id='eight' onClick={() => this.setState({ display: this.state.display + '8' })}>8</button>
          <button className='button' id='nine' onClick={() => this.setState({ display: this.state.display + '9' })}>9</button>
          <button className='button' id='divide' onClick={() => this.setState({ display: this.state.display + '/' })}>/</button>
        </div>

        <div className='row'>
          <button className='button' id='four' onClick={() => this.setState({ display: this.state.display + '4' })}>4</button>
          <button className='button' id='five' onClick={() => this.setState({ display: this.state.display + '5' })}>5</button>
          <button className='button' id='six' onClick={() => this.setState({ display: this.state.display + '6' })}>6</button>
          <button className='button' id='multiply' onClick={() => this.setState({ display: this.state.display + 'x' })}>x</button>
        </div>

        <div className='row'>
          <button className='button' id='one' onClick={() => this.setState({ display: this.state.display + '1' })}>1</button>
          <button className='button' id='two' onClick={() => this.setState({ display: this.state.display + '2' })}>2</button>
          <button className='button' id='three' onClick={() => this.setState({ display: this.state.display + '3' })}>3</button>
          <button className='button' id='subtract' onClick={() => this.setState({ display: this.state.display + '-' })}>/</button>
        </div>

        <div className='row'>
          <button className='button' id='zero' onClick={() => this.setState({ display: this.state.display + '0' })}>0</button>
          <button className='button' id='decimal' onClick={() => this.setState({ display: this.state.display + '.' })}>.</button>
          <button className='button' id='equals' onClick={() => this.trackHistory()}>=</button>
          <button className='button' id='add' onClick={() => this.setState({ display: this.state.display + '+' })}>+</button>
        </div>
        <div id='historySection'>
          <h2 id='historyTitle'>Past Calculations</h2>
          <div id='history'>{this.state.history.map((h, idx) => <div key={idx}>{h}</div>)}</div>
        </div>
      </div>
    )
  }
}

// display:results

export default App
