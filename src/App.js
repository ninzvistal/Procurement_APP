import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import {
  makeStyles

} from '@material-ui/core';


const useStyle = makeStyles({
  appMain: {
    padding: '320px',
    width: '100%'
  }
})


function App() {

  const classes = useStyle();

      return (  
      <>           
        <div>
          <SideMenu />
          <div className={classes.appMain}>Hello</div>
        </div>
      </>        
    );
}

export default App;
