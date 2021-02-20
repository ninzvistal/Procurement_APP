import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import {
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    top:'0px',
    width: '100%',
    position:'relative'
  }
})


function App() {

  const classes = useStyles();

      return (  
      <>
          <SideMenu />  
          <div className={classes.appMain}>
            <Header />
          </div>       
      </>        
    );
}

export default App;
