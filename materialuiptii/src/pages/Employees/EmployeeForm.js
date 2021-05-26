import { Grid } from '@material-ui/core';
import React, {useEffect} from 'react'
import {Controls} from '../../components/controls/Controls';
import {useForm, Form} from '../../components/useForm';
import * as ServiceEmployee from '../../services/employeeService'

const genderItems = [
    {
        id:'male',
        title:'Male'
    },
    {
        id:'female',
        title:'Female'
    }
]

const initFieldValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hideDate: new Date(),
    isPermanent: false
}

const EmployeeForm = (props) => {

    const {addOrEdit, recForEdit} = props

    const validateFn = (fieldValues = values) => {
        let temp = {...errors}
        let requiredText = 'This field is required.'

        if('fullname' in fieldValues)
            temp.fullname = fieldValues.fullname ? '' : requiredText
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? '' : 'Invalid email.'
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Invalid mobile.' 
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? '' : requiredText
        
        setErrors({...temp})

        if(fieldValues === values)
            return Object.values(temp).every(x => x === '')
    }

    const {values, setValues, handleInputChange, errors, setErrors, resetFormFn } = useForm(initFieldValues, true, validateFn); 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateFn()) {
            addOrEdit(values, resetFormFn)
        }


    }

    useEffect(() => {
        if(recForEdit != null) {
            setValues({
                ...recForEdit
            })
        }
    }, [recForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label='Full Name'
                        name='fullname'
                        value={values.fullname}
                        onChange={handleInputChange}
                        error={errors.fullname}
                    />
                    <Controls.Input
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label='City'
                        name='city'
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label='Mobile'
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name='gender'
                        label='Gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name='departmentId'
                        label='Department'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={ServiceEmployee.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name='hireDate'
                        label='Date Hired'
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            variant='outlined'
                            size='large'
                            text='Reset'
                            color='default'
                            onClick={resetFormFn}
                        />
                        <Controls.Button text='Save' type='submit' />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
