import React from 'react'
import { 
    Card, Typography, makeStyles 
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles (theme => ({
    root: {
        backgroundColor: '#fdfdff',
        transform: 'translateZ(0)'
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'        
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }

}))


export default function PageHeader(props) {

    const {title,subtitle, icon} = props;
    const classes = useStyle();

    return (
            <Paper elevation={0} square>
                <div className={classes.pageHeader}>
                    <Card className={classes.pageIcon}>
                        {icon}
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography
                        variant="h6"
                        component="div">
                        {title}
                        </Typography>
                        <Typography
                        variant="subtitle2"
                        component="div">
                        {subtitle}
                        </Typography>
                    </div>
                </div>
            </Paper>
        
    )
}