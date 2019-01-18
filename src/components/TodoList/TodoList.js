import React, { Component } from 'react'
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
    INCOMPELETED:'INCOMPELETED'
}

class TodoList extends Component {
    state = {
        activeFilter: FILTERS.ALL,
        filters: [
            FILTERS.ALL,
            FILTERS.COMPELETED,
            FILTERS.INCOMPELETED
        ]
    }
    handleToggle = (id) => {
        this.props.toggleTodo(id);
    }
    handleRemoveClick = (id) => {
        this.props.removeTodo(id);
    }
    handleFilterChange = (filter) => {
        this.setState({
            activeFilter: filter
        })
    }
    render() {
        const { classes } = this.props;
        console.log(this.state.activeFilter === FILTERS.ALL)
        const filteredTodos = this.state.activeFilter === FILTERS.ALL? this.props.todos:
        this.props.todos.filter(todo => this.state.activeFilter == FILTERS.COMPELETED ? todo.compeleted : !todo.compeleted)
        return (
            <div className={cssStyles['list-root']}>
                <List className={classes.root}>
                    {filteredTodos.map(todo => <ListItem key={todo.id} role={undefined} dense button onClick={() => this.handleToggle(todo.id)}>
                        <Checkbox
                            checked={todo.compeleted}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={todo.text} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="remove" onClick={() => this.handleRemoveClick(todo.id)}>
                                <ClearIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>)}
                </List>
                <TodoListFilter handleChange={this.handleFilterChange} filters={this.state.filters} activeFilter={this.state.activeFilter} />
            </div>
        )
    }
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