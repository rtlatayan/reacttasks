import { makeStyles } from '@material-ui/core';
import {useState } from 'react'

export const useForm = (initFieldValues,validateOnChange=false, validateFn) => {
    const [values, setValues] = useState(initFieldValues); 
    const [errors, setErrors] = useState({}); 

    const handleInputChange = (e) => {
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name]: value
        })

        if(validateOnChange) {
            validateFn({[name]: value})
        }
   }

   const resetFormFn = () => {
       setValues(initFieldValues)
       setErrors({})
   }

    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        resetFormFn
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
    const {children, ...others} = props

    return (
        <form className={classes.root} autoComplete='off' {...others}>
            {props.children}
        </form>
    )
}

