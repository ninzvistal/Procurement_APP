import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {
    makeStyles,
    Paper
}from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding:theme.spacing(3)
    }
}))


export default function Employees() {
    
    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<SupervisedUserCircleIcon />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
            
        </>
    )
}



