import React from 'react';
import {
    makeStyles
} from '@material-ui/core'


const useStyles = makeStyles({
    sidemenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '300px',
        height: '100%',
        backgroundColor:'#253053' 
    }
})

const SideMenu = () => {

    const classes = useStyles();
    console.log(classes)
    


    return(
        <div className={classes.sidemenu}>Hellow</div>
    )

}

export default SideMenu;