import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Controls} from './controls/Controls'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: 0
    }
}))

const Popup = (props) => {

    const {title, children, openPopup, setOpenPopup} = props
    const classes = useStyles()
 
    return (
        <Dialog
            open={openPopup}
            maxWidth='md'
            classes={{paper: classes.dialogWrapper}}
        >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{display: 'flex'}}>
                    <Typography
                        variant='h6'
                        component='div'
                        style={{flexGrow: 1}}
                    >
                        {title} 
                    </Typography>
                    <Controls.ActionBtn
                        color='secondary'
                        onClick={(e) => setOpenPopup(false)}
                    >
                        <CloseIcon />
                    </Controls.ActionBtn>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
