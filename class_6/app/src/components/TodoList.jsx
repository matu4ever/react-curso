import React from 'react';
import { connect } from 'react-redux';
import { addTodo,cancelTodo,toggleTodo,upTodo } from '../redux/todo';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: ""
    }
    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
    this.cancel = this.cancel.bind(this);
    this.toggle = this.toggle.bind(this);
    this.up = this.up.bind(this);
  }

  add() {
    this.props.addText(this.state.text);
    console.log(this.props);
    this.setState({
      text: ""
    });
  }

  cancel(idx) {
    this.props.cancelText(idx);
    console.log(idx);
  }

  toggle(idx) {
    this.props.toggleText(idx);
    console.log(this.state);
  }

  up(idx) {
    this.props.upText(idx);
    console.log(idx);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  render () {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onChange} />
        <button onClick={this.add}> Agregar </button>
        <br />
        <ul>
          { this.props.todos.sort((x,y) => x.value < y.value).map(
            (x, idx) => <li key={idx} style={(x.completed)?{'color': 'green'}:{'color': 'red'}}> {x.text} <button key='cancel${idx}' onClick={() => this.cancel(idx)}> X </button> <button key='toggle${idx}' onClick={() => this.toggle(idx)}> Toggle </button> <button key='up${idx}' onClick={() => this.up(idx)}> Flecha Arriba </button>  </li>
          )}
        </ul>
      </div>
    )
  }
}


export default connect(
  (state) => { 
    return { todos: state }
  },
  { 
    addText: (text) => addTodo(text),
    cancelText: (index) => cancelTodo(index),
    toggleText: (index) => toggleTodo(index),
    upText: (index) => upTodo(index)
  }
)(TodoList);
