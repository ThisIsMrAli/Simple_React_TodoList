import React, { useState } from 'react'
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { toggleTodoStatus, removeTodo } from './../../store/actions';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import TodoListFilter from './../TodoListFilter/TodoListFilter';
import cssStyles from './TodoList.module.css';

const styles = theme => ({
    root: {
        width: '100%',
        margin: 'auto',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
const FILTERS = {
    ALL: "ALL",
    COMPELETED: 'COMPELETED',
    INCOMPELETED: 'INCOMPELETED'
}

const TodoList = (props) => {

    const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);
    const [filters, setFilters] = useState([FILTERS.ALL,
    FILTERS.COMPELETED,
    FILTERS.INCOMPELETED]);

    const handleToggle = (id) => {
        props.toggleTodo(id);
    }
    const handleRemoveClick = (id) => {
        props.removeTodo(id);
    }
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    }
    const { classes } = props;
    const filteredTodos = activeFilter === FILTERS.ALL ? props.todos :
       props.todos.filter(todo => activeFilter == FILTERS.COMPELETED ? todo.compeleted : !todo.compeleted)
    return (
        <div className={cssStyles['list-root']}>
            <List className={classes.root}>
                {filteredTodos.map(todo => <ListItem key={todo.id} role={undefined} dense button onClick={() => handleToggle(todo.id)}>
                    <Checkbox
                        checked={todo.compeleted}
                        tabIndex={-1}
                        disableRipple
                    />
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="remove" onClick={() => handleRemoveClick(todo.id)}>
                            <ClearIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>)}
            </List>
            <TodoListFilter handleChange={handleFilterChange} filters={filters} activeFilter={activeFilter} />
        </div>
    )

}

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    toggleTodo: todoId => dispatch(toggleTodoStatus(todoId)),
    removeTodo: todoId => dispatch(removeTodo(todoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(TodoList));