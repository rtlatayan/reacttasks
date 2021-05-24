import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}) )

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase
                            placeholder='Search...'
                            startAdornment={<SearchIcon fontSize='small'/>}
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm />
                    <Grid item>
                        {/* <IconButton classes={{root:classes.btnRoot, label:classes.btnLabel}}> */}
                        {/* <IconButton classes={{root:classes.btnRoot}}> */}
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge  badgeContent={2} color='primary'>
                                <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize='small' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header