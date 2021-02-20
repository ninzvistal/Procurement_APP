import React from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
    InputBase,
    IconButton,
    Badge,   
}from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

const Header = () => {

    return (
        <AppBar postiion="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={4} style={{border:'1px solid black'}}>
                        <InputBase />
                    </Grid>
                    <Grid item xs={8} style={{border:'1px solid yellow'}}>
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