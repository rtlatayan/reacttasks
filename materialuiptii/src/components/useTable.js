import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core'
import React, {useState} from 'react'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light
        },
        '& tbody td': {
            fontWeight: '300'
        },
        '& tbody tr:hover td': {
            backgroundColor: '#ffffb2',
            cursor: 'pointer'
        }
    }
}))

export default function useTable(records, headCells, filterFn) {
    const classses = useStyles();

    const TblContainer = (props) => (
        <Table className={classses.table}>
            {props.children}
        </Table>
    )

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const TblHead = (props) => {
        // console.log('headCells', headCells)
        // console.log('records', records)
        const handleSortReq = (cellId) => {
            const isAsc = orderBy === cellId && order === 'asc'
            setOrder(isAsc ? 'desc': 'asc')
            setOrderBy(cellId)
        }
        return (
            <TableHead>
                <TableRow>
                    {headCells.map(hc => (
                        <TableCell
                            key={hc.id}
                            sortDirection={orderBy === hc.id ? order : false}
                        >
                            {hc.disableSorting ? hc.label :
                            <TableSortLabel
                                active={orderBy === hc.id}
                                direction={orderBy === hc.id ? order : 'asc'}
                                onClick={(e) => {handleSortReq(hc.id)}}
                            >
                                {hc.label}
                            </TableSortLabel>}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }

    const sortFn = (arr, comparator) => {
        const arrangeThis = arr.map((el, index) => [el, index])
        arrangeThis.sort((a, b) => {
            const order = comparator(a[0], b[0])
            if (order !== 0) return order
            return a[1]-b[1]
        })
        return arrangeThis.map((el) => el[0])
    }

    const getComparatorFn = (order, orderBy) => {
        return order === 'desc' ? (a, b) => descComp(a, b, orderBy) : (a, b) => -descComp(a, b, orderBy)
    }

    const descComp = (a, b, orderBy) => {
        if(b[orderBy] < a[orderBy]) return -1
        if(b[orderBy] > a[orderBy]) return 1
        return 0
    }

    const recordsPageUpdate = () => {
        return sortFn(filterFn.fn(records), getComparatorFn(order, orderBy)).slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }
    
    const TblPagination = () => (<TablePagination
        component='div'
        page={page}
        rowsPerPageOptions={pages}
        count={records.length}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
    />)

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsPageUpdate
    }
}
