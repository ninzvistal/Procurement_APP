import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import {
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core';
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import PageHeader from './components/PageHeader';
import Employees  from './pages/Employees/Employees';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  // shape: {
  //   borderRadius: '12px'
  // },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
  

})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    top:'0px',
    width: '100%',
    // position:'relative'
  }
})


function App() {

  const classes = useStyles();

      return (  
      <ThemeProvider theme={theme}>
          <SideMenu />  
          <div className={classes.appMain}>
            <Header />
            {/* {/* <PageHeader
              title="Page Header"
              subtitle="Page Description"
              icon={<SupervisedUserCircleIcon fontSize="large" />}
             /> */}
             <Employees /> 
          </div>
          
          <CssBaseline />     
      </ThemeProvider>        
    );
}

export default App;
