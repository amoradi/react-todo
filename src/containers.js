// glue btw state and components
// react-redux allows us to create store-aware containers that 
// wrap around our components

// containers are created with the connect(mapStateToProps(), mapDispatchToProps())

import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(components.TodoList);
