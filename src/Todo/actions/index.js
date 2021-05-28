import C from '../constants';
import { v4 } from 'uuid';

export const addTodo = text => ({
    type: C.ADD_TODO,
    id: v4(),
    text,
})

export const setVisibilityFilter = filter => ({
    type: C.SET_VISIBILITY_FILTER,
    filter,
})

export const toggleTodo = id => ({
    type: C.TOGGLE_TODO,
    id,
})