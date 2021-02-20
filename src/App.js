import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import {
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles({
  appMain: {
    padding: '300px',
    width: '100%'
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
