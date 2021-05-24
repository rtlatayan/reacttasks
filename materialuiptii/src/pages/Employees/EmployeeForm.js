import { Grid } from '@material-ui/core';
import React from 'react'
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
    fullname: 'Rota Bells',
    email: 'rota@gmail.com',
    mobile: '09171231234',
    city: 'San Pablo',
    gender: 'female',
    departmentId: 1,
    hideDate: new Date(),
    isPermanent: false
}

const EmployeeForm = () => {
    const {values, handleInputChange} = useForm(initFieldValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label='Full Name'
                        name='fullname'
                        value={values.fullname}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
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
                            text='Cancel'
                            color='default'
                        />
                        <Controls.Button text='Save' type='submit' />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
