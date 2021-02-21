import React from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
    InputBase,
    IconButton,
    Badge,
    makeStyles   
}from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    appBar:{
        position: 'relative'
    },
    root: {
        backgroundColor: '#fff'
    },
    searhInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& MuiSvgIcon-root': {
            // marginRight: '8px'
            marginRight: theme.spacing(1)
        }
    },
    // btnRoot: {
    //     backgroundColor: 'green'
    // },
    // btnLabel:{
    //     backgroundColor: 'red'

    // }
})

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="statid" className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems="center">
                    <Grid item sm={8}>
                        <InputBase 
                        placeholder="Search Topics"
                        className={classes.searhInput}
                        startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <IconButton 
                        // classes={{root:classes.btnRoot,label:classes.btnLabel}}
                        >
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>                            
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutline />
                            </Badge>
                        </IconButton>
                        <IconButton color="secondary">                            
                                <PowerSettingsNewIcon />                            
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )

}


export default Header;