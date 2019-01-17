import { Types, addTodo } from "./actions";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case Types.ADD_TODO: {
            let todo = action.payload;
            let newItem = { id: state.length, text: todo, compeleted: false };
            return [...state, newItem];
        }
        case Types.TOGGLE_TODO_STATUS: {
            let todoId = action.payload;
            return state.map(todo => {
                if (todo.id === todoId) todo.compeleted = !todo.compeleted;
                return todo;
            });
        }
        case Types.REMOVE_TODO: {
            let todoId = action.payload;
            return state.filter(todo => todo.id !== todoId);
        }

        default:
            return state;
    }
}

export default todoReducer;

