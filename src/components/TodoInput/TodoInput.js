import styles from './TodoInput.module.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from './../../store/actions';
const TodoInput = (props) => {
    const [formText, setFormText] = useState('');
    const handleChange = event => {
        setFormText(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        if (formText !== "") {
            props.addTodo(formText)

        }
        setFormText("");
    };
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <FormControl>
                <TextField
                    id="standard-with-placeholder"
                    label="type todo!"
                    placeholder="Placeholder"
                    className={styles['input-todo']}
                    margin="normal"
                    onChange={handleChange}
                    value={formText}
                />
            </FormControl>
        </form>
    );
}
const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});
export default connect(null, mapDispatchToProps)(TodoInput);