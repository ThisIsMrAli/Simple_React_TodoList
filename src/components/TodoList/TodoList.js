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

const styles = theme => ({
    root: {
        width: '100%',
        margin: 'auto',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class TodoList extends Component {
    handleToggle = (id) => {
        this.props.toggleTodo(id);
    }
    handleRemoveClick = (id) => {
        this.props.removeTodo(id);
    }
    render() {
        const { classes } = this.props;
        return (
            <List className={classes.root}>
                {this.props.todos.map(todo => <ListItem key={todo.id} role={undefined} dense button onClick={() => this.handleToggle(todo.id)}>
                    <Checkbox
                        checked={todo.compeleted}
                        tabIndex={-1}
                        disableRipple
                    />
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="remove">
                            <ClearIcon onClick={() => this.handleRemoveClick(todo.id)} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>)}
            </List>
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