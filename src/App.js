import React, { Component } from 'react';
import colors from './colors'

function clipBoard() {
  var copyText = document.getElementById("silent");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
}

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
      name: ''
    }
    this.onType = this.onType.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onClick(c) {
    clipBoard()
  // e.clipboardData.setData('text/plain', c);
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
    return (<div key={i} style={css.color} onClick={() => clipBoard()}>
      <div style={shade}/>
      <div>{c}</div>
    </div>)
  }
  render() {
    return (
      <div style={css.container}>
        <input type="hidden" id="silent" value={"hello"}/>
        <input type="text" onChange={this.onType} style={css.input} value={this.state.name}/>
        <div style={css.list}>
          {this.state.colors.map(this.makeColor)}
        </div>
      </div>
      );
  }
}

export default App;
