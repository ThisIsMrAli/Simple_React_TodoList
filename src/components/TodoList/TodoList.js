import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        { this.props.todos.map(todo=> <li>{todo.text}</li>)}
      </ul>
    )
  }
}
