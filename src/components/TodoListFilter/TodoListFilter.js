import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const TodoListFilter = (props) => {
    const { handleChange, activeFilter, filters } = props;
    return (
        <FormControl component="fieldset" >
            <FormLabel component="legend">Filter</FormLabel>
            <RadioGroup
                aria-label="filter Todos"
                name="filter"
                value={activeFilter}
                row
                onChange={(event) => handleChange(event.target.value)}
            >
                {filters.map(filter => (<FormControlLabel key={filter} value={filter} control={<Radio />} label={filter} />))}
            </RadioGroup>
        </FormControl>
    )
}

export default TodoListFilter;