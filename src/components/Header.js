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



const useStyles = makeStyles({
    appBar:{
        position: 'relative'
    }
})

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Grid container>
                    <Grid item sm={8}>
                        <InputBase />
                    </Grid>
                    <Grid item sm={4}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>                            
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutline />
                            </Badge>
                        </IconButton>
                        <IconButton badgeContent={4} color="secondary">                            
                                <PowerSettingsNewIcon />                            
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )

}


export default Header;