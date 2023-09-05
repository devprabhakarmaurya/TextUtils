
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleStyle=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#002b49';  
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
   <>
  <Router>
    <Navbar mode={mode} onClick={toggleStyle} title="TextUtils" />
    <div className="container my-1" style={{height:'50px'}}>
      <Alert alert={alert}/>

    </div>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/>
        <Route exact path="/about" element={ <About mode={mode} />}/>  
      </Routes>
     
      
    </div>
  </Router>
   
   </>
   
  );
}

export default App;
