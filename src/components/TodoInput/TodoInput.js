import styles from './TodoInput.module.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from './../../store/actions';
class App extends Component {
    state = {
        formText: ''
    };
    handleChange = event => {
        this.setState({
            formText: event.target.value
        });
    };
    handleSubmit = event => {
        // console.log(this.state.item);
        event.preventDefault();
        if (this.state.formText !== "") {
            this.props.addTodo(this.state.formText)

        }
        this.setState({ formText: "" });
    };
    render() {
        return (
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <FormControl>
                    <TextField
                        id="standard-with-placeholder"
                        label="type todo!"
                        placeholder="Placeholder"
                        className={styles['input-todo']}
                        margin="normal"
                        onChange={this.handleChange}
                        value= {this.state.formText}
                    />
                </FormControl>
            </form>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});
export default connect(null,mapDispatchToProps)(App);