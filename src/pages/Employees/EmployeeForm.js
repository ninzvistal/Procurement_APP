import React, {useState,useEffect} from 'react';
import {
    FormControl,    
    TextField,
    Grid,
    makeStyles,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper
}from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        '& .MuiFormControl-root':{
             width: '100%',
             margin: theme.spacing(1),
             position: 'relative'
         }
    }

}))



const initialValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentid: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm(){

    const [values, setValues] = useState(initialValues);
    const classes = useStyles();
    
    const handleInputChange = e => {
        const [name, value] = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return(
        <>
            
            <form className={classes.root}>
                <Grid
                container 
                alignItems="flex-start"            
                >
                    <Grid container xs={12} spacing={1}>
                        <Grid item xs>
                            <TextField
                            variant="outlined"
                            label="firstname"
                            name="firstname"
                            value={values.fullname}
                            onChange={handleInputChange}
                            />
                            <TextField
                            variant="outlined"
                            label="email"
                            name="email"
                            value={values.email}
                            />
                        </Grid>
                        <Grid item xs>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="male" control={<Radio />} label="Male"></FormControlLabel>
                                    <FormControlLabel value="female" control={<Radio />} label="Female"></FormControlLabel>
                                    <FormControlLabel value="others" control={<Radio />} label="Others"></FormControlLabel>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>  
            </form>
            
        </>
    )

}

