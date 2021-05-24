import { makeStyles } from '@material-ui/core';
import {useState } from 'react'

export const useForm = (initFieldValues) => {
    const [values, setValues] = useState(initFieldValues); 
    const handleInputChange = (e) => {
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name]: value
        })
   }

    return {
        values,
        setValues,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '80%'
        }
    }
}))

export const Form = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root} autoComplete='off'>
            {props.children}
        </form>
    )
}

