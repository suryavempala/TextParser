import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode,setMode]=useState('light');
  const toggle=()=>
  {
    if(mode==='light')
    {
      document.body.style.backgroundColor='#545454';
      setMode('dark');
    }
    else{
      document.body.style.backgroundColor='white';
      setMode('light');
    }
  }
  return (
   <> 
   <Navbar title="TextParser" mode={mode} toggle={toggle}/>
   <div className="container my-3">
   <TextForm heading="Enter the text to Analyse" mode={mode} />
   </div>
   </>  
  );
}

export default App;
