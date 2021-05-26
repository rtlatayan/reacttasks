import React, {useState} from 'react'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import EmployeeForm from './EmployeeForm'
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core'
import useTable from '../../components/useTable'
import * as employeeService from '../../services/employeeService'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
})) 

const headCells = [
    {id: 'fullname', label: 'Employee Name'},
    {id: 'email', label: 'Email Address'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'department', label: 'Department', disableSorting:true}
]

const Employees = () => {
    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsPageUpdate
    } = useTable(records, headCells)

    // console.log('recordsPageUpdate', recordsPageUpdate())

    return (
        <>
            <PageHeader
                title='New Employee'
                subtitle='Form design with validation'
                icon={<PeopleOutlineIcon fontSize='large' />}
            /> 
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records && recordsPageUpdate().map(rec => (
                            <TableRow key={rec.id}>
                                <TableCell>{rec.fullname}</TableCell>
                                <TableCell>{rec.email}</TableCell>
                                <TableCell>{rec.mobile}</TableCell>
                                <TableCell>{rec.department}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
        </>
    )
}

export default Employees
