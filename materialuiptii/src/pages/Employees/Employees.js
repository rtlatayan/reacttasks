import React, {useState} from 'react'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import EmployeeForm from './EmployeeForm'
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core'
import useTable from '../../components/useTable'
import * as employeeService from '../../services/employeeService'
import {Controls} from '../../components/controls/Controls'
import {Search} from '@material-ui/icons/'
import AddIcon from '@material-ui/icons/Add'
import Popup from '../../components/Popup'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: 10
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
    const [filterFn, setFilterFn] = useState({fn:items => {return items}})
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsPageUpdate
    } = useTable(records, headCells, filterFn)

    // console.log('recordsPageUpdate', recordsPageUpdate())

    const handleSearch = (e) => {
        let target = e.target
        setFilterFn({
            fn: items => {
                if(target.value==='') {
                    return items
                } else {
                    return items.filter(x => x.fullname.toLowerCase().includes(target.value))
                }
            }
        })
    }

    return (
        <>
            <PageHeader
                title='New Employee'
                subtitle='Form design with validation'
                icon={<PeopleOutlineIcon fontSize='large' />}
            /> 
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        className={classes.searchInput}
                        label='Search Employees'
                        InputProps= {{
                            startAdornment: (<InputAdornment position='start'>
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        className={classes.newButton}
                        text='Add Employee'
                        variant='outlined'
                        label=''
                        startIcon={<AddIcon />}
                        onClick={(e) => setOpenPopup(true)}
                    />
                </Toolbar>
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
            <Popup
                title='Employee Form'
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm />
            </Popup>
        </>
    )
}

export default Employees
