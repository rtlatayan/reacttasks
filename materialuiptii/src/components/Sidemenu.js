import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        height: '100%',
        width: '320px',
        backgroundColor: '#253053'
    }
})

const Sidemenu = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.sideMenu}>
            <h1>Sidemenu</h1>
        </div> 
    )
}

export default Sidemenu
