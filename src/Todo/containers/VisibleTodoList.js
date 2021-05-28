import { connect } from 'react-redux';
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import C from "../constants";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case C.SHOW_ALL:
            return todos
        case C.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case C.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)