import React ,{useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>
  {
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{setalert(null);},2000);
  }
  const toggle=()=>
  {
    if(mode==='light')
    {
      document.body.style.backgroundColor='#545454';
      setMode('dark');
      showAlert("Dark mode has been enabled",'success');
    }
    else{
      document.body.style.backgroundColor='white';
      setMode('light');
      showAlert("Light mode has been enabled",'success');
    }
  }
  return (
   <> 
   <Router>
   <Navbar title="TextParser" mode={mode} toggle={toggle}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/about" element={ <About mode={mode}/>}/>
  
          <Route path="/" element={<TextForm heading="Enter the text to Analyse" mode={mode}  showAlert={showAlert}  />}/>
    </Routes>
  </div>
  </Router>
   </>  
  );
}

export default App;
