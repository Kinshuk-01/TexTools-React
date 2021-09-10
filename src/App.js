import './App.css';
import Navbar from './components/Navbar'; 
import Alert from './components/Alert'; 
import TextForm from './components/TextForm'; 
// import About from './components/About'; 
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  //DARK MODE
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(14,14,14)';
      document.body.style.color='white';
      showAlert('Dark Mode has been enabled successfully', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('Light Mode has been enabled successfully', 'success');
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title="TexTools" aboutBtn="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}

    <Alert alert={alert}/>

    {/* <Switch>
        <Route exact path="/about">
          <div className="container my-5">
            <About mode={mode}/>
          </div> 
        </Route> */}

        {/* <Route exact path="/"> */}
          <div className="container my-4">
            <TextForm showAlert={showAlert} heading="Enter you text to analyze below:" />
          </div>
        {/* </Route>
    </Switch>

    </Router> */}
    </>
  );
}

export default App;
