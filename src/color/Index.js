import React, { Component } from 'react';
import * as colorjs from 'color-js'

const css = {
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  input: {
    width: '40%',
    'minWidth': '100px',
    'marginTop': '10%',
    'marginBottom': '40px',
    padding: '5px',
    height: '30px',
    'fontSize': '28px',
    color: 'grey'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
    this.onType = this.onType.bind(this)
    this.onChoose = this.onChoose.bind(this)
  }
  onType(e) {
    let str = e.target.value
    this.setState({
      color: str,
    })
  }
  onChoose(c) {
    console.log(c)
    window.location.href = c
    // window.location.reload()
    this.setState({
      color: c
    })
  }
  showList(arr) {
    arr.shift()
    arr = arr.map((o) => o.toString())
    return arr.map((c, i) => {
      let css = {
        'backgroundColor': c,
        width: 80,
        height: 80,
      }
      return <div key={i} onClick={this.onChoose.bind(this, c)} style={css}/>
    })
  }
  render() {
    let state = this.state
    let main = {
      'backgroundColor': state.color,
      width: '80%',
      left: '10%',
      height: '70px'
    }
    let suite = {
      display: 'flex',
      padding: '20px',
      'flexDirection': 'row'
    }
    let c = colorjs(state.color)
    let methods = [
      'complementaryScheme',
      'splitComplementaryScheme',
      'splitComplementaryCWScheme',
      'splitComplementaryCCWScheme',
      'triadicScheme',
      'clashScheme',
      'tetradicScheme',
      'fourToneCWScheme',
      'fourToneCCWScheme',
      'fiveToneAScheme',
      'fiveToneBScheme',
      'fiveToneCScheme',
      'fiveToneDScheme',
      'fiveToneEScheme',
      'sixToneCWScheme',
      'sixToneCCWScheme',
      'neutralScheme',
      'analogousScheme',
    ]
    let suites = methods.map((fn, i) => {
      return (<div style={suite} key={i}>
        {this.showList(c[fn]())}
      </div>
      )
    })
    return (
      <div style={css.container}>
        <input style={css.input} value={state.color} onChange={this.onType}  />
        <div style={main}/>
        {suites}
      </div>
      );
  }
}

// fiveToneAScheme( ) : List of Colors
// fiveToneBScheme( ) : List of Colors
// fiveToneCScheme( ) : List of Colors
// fiveToneDScheme( ) : List of Colors
// fiveToneEScheme( ) : List of Colors
// sixToneCWScheme( ) : List of Colors
// sixToneCCWScheme( ) : List of Colors
// neutralScheme( ) : List of Colors
// analogousScheme( ) : List of Colors
export default App;
