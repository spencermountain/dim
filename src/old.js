const el = require('redom').el;
const mount = require('redom').mount;
var colors = require('./colors')
console.log(colors)
const div = (attr, inside, c) => {
  return el('div', attr, inside);
}

const css = {
  container: {
    display: 'flex',
    'flex-direction': 'column',
    width: '100%',
    height: '100%',
    'flex-wrap': 'wrap',
  },
  input: {
    height: '30px',
    'font-size': 27,
    margin: 10
  },
  color: {
    width: '180px',
    height: '80px',
    display: 'flex',
    'flex-direction': 'row',
    border: '1px solid lightgrey',
    padding: 15
  },
}

class Main {
  draw() {
    return this.colors.map((c) => {
      let square = div({
        style: {
          'background-color': c,
          width: '80px',
          'min-width': '80px',
          height: '80px',
        }
      })
      return div({
        style: css.color
      }, [
        square,
        c
      ])
    })
  }
  constructor() {
    this.colors = Object.keys(colors)
    this.el = div({
      style: css.container
    }, [
      el('input', {
        style: css.input,
        onkeypress: this.onType
      }),
      div(this.draw())
    ])
  }
  onType(e) {
    let str = e.target.value
    this.colors = Object.keys(colors).filter((c) => c.match(str))
  }
}

const app = new Main();
mount(document.body, app);
