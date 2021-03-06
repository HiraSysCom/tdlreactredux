import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoTextInput from '../components/TodoTextInput'
import { addTodo } from '../actions'

export const Header = ({ addTodo }) => (
  <header className="header">
    <h1>Todo List</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="Lo que tenemos que hacer"
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(Header)