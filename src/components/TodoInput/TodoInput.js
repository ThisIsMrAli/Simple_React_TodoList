import styles from './TodoInput.module.css';
import TextField from '@material-ui/core/TextField';
import React, {Component} from 'react';
class App extends Component {
    render() {
        return (
            <TextField
            id="standard-with-placeholder"
            label="With placeholder"
            placeholder="Placeholder"
            className={styles['input-todo']}
            margin="normal"
          />
        );
    }
}
export default App;