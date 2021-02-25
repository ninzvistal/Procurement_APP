import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {
    makeStyles,
    Paper,
    Grid,
    TextField,
    FormControl
}from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(3),
        padding:theme.spacing(2),
        //width: '100%',
        position: 'relative'
    }
}))


export default function Employees() {
    
    const classes = useStyles();

    return (
        <div>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<SupervisedUserCircleIcon />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm/>    
            </Paper>  

                
           
        </div>
    )
}



