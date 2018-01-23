import React, { Component } from 'react';
import colors from './colors'
import Color from '../color/Index'
import toHex from '../lib'

const css = {
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  list: {
    marginLeft: '10%',
    width: '80%',
    border: '1px solid grey',
    display: 'flex',
    alignSelf: 'center',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    color: 'grey'
  },
  input: {
    height: '30px',
    'fontSize': 27,
    margin: 10
  },
  color: {
    width: '180px',
    cursor: 'pointer',
    // height: '180px',
    display: 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
  },
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      colors: Object.keys(colors),
      color: null,
      name: ''
    }
    this.onType = this.onType.bind(this)
    this.onClick = this.onClick.bind(this)
    this.makeColor = this.makeColor.bind(this)
  }
  onClick(c) {
    c = toHex(c)
    this.setState({
      color: c
    })
    window.location.hash = c
  }
  onType(e) {
    let str = e.target.value
    let arr = Object.keys(colors).filter((c) => c.match(str))
    this.setState({
      colors: arr,
      name: e.value
    })
  }
  makeColor(c, i) {
    let shade = {
      'backgroundColor': c,
      width: '80px',
      'minWidth': '80px',
      margin: 15,
      height: '80px',
    }
    return (<div key={i} style={css.color} onClick={() => this.onClick(c)}>
      <div style={shade}/>
      <div>{c}</div>
    </div>)
  }
  render() {
    let color = this.state.color
    if (color) {
      console.log(color)
      return <Color color={color}/>
    }
    return (
      <div style={css.container}>
        <input type="text" onChange={this.onType} style={css.input} value={this.state.name}/>
        <div style={css.list}>
          {this.state.colors.map(this.makeColor)}
        </div>
      </div>
      );
  }
}

export default App;
