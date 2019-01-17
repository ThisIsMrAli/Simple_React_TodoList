const Types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
    REMOVE_TODO: 'REMOVE_TODO'
}

const addTodo = todo => ({
    type: Types.ADD_TODO,
    payload: todo
})

const toggleTodoStatus = id => ({
    type: Types.TOGGLE_TODO_STATUS,
    payload: id
})

const removeTodo= id =>({
    type: Types.REMOVE_TODO,
    payload: id
})

export { Types, addTodo, toggleTodoStatus,removeTodo };