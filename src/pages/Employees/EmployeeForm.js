import React, {useState,useEffect} from 'react';
import {
    FormControl,    
    TextField,
    Grid,
    makeStyles
}from '@material-ui/core'
import useForm from '../../components/useForm';


const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            with: '80%',
            margin: theme.spacing(1)
        }
    }


}))



const initialValues = {
    id: '0',
    firstname: '',   
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentid: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm(){

    // const [values, setValues] = useState(initialValues);

    const{
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues);

    const classes = useStyles();
    
    // const handleInputChange = e => {
    //     const [name, value] = e.target
    //     setValues({
    //         ...values,
    //         [name]:value
    //     })
    // }

    return(
        <FormControl className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"                        
                        label="firstaname"
                        name="firstname"
                        value = { values.mobile} 
                        onChange = { handleInputChange }
                    /> 
                     <TextField
                        variant="outlined"                        
                        label="mobile"
                        name="mobile"
                        value = { values.mobile }
                    />                              
                </Grid>                
                <Grid item xs={6}></Grid>
            </Grid>
        </FormControl>
    )

}

