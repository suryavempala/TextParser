import React,{ useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("");
    const handleClickUpper=()=>
    {
        setText(Text.toUpperCase())
        props.showAlert("Text chanaged to uppercase",'success');
        
    }
    const handleClickLower=()=>
    {
        setText(Text.toLowerCase())
        props.showAlert("Text chanaged to lowercase",'success');
    }
    const handleChange=(event)=>
    {
            setText(event.target.value)
    }
    const handleCopy=()=>
    {
          
           navigator.clipboard.writeText(Text);
           props.showAlert("Text copied to clipboard",'success');
    }
    const handleClear=()=>
    {
           setText('')
           props.showAlert("Text has been cleared",'success');
    }
    const RemoveExtraSpace=()=>
    {
          let newText=Text.split(/[ ]+/);
          setText(newText.join(" "))
          props.showAlert("Extra spaces has been removed",'success');
    }
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode==='dark'?'#545454':'white',color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div>
            <textarea style={{backgroundColor:props.mode==='dark'?'#545454':'white',color:props.mode==='dark'?'white':'black'}} className="form-control mt-4" value={Text} onChange={handleChange} id="textBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mt-5  mx-2" onClick={handleClickUpper}>To Upper</button>
        <button className="btn btn-primary mt-5  mx-2" onClick={handleClickLower}>To Lower</button>  
        <button className="btn btn-primary mt-5  mx-2" onClick={handleClear}>Clear Text</button>   
        <button className="btn btn-primary mt-5  mx-2" onClick={handleCopy}>Copy Text</button> 
        <button className="btn btn-primary mt-5  mx-2" onClick={RemoveExtraSpace}>Remove Extra Spaces</button>         
    </div>
    <div className="container mt-5" style={{backgroundColor:props.mode==='dark'?'#545454':'white',color:props.mode==='dark'?'white':'black'}}>
       <h2>Text Summary : </h2>
        <p className='text-center m-5 blank'>
            Number of Charecters : {Text.length} <br></br>
            Number of words : {Text.length===0?0:Text[Text.length-1]===' '?Text.split(/[ ]+/).length-1 :Text.split(/[ ]+/).length } <br></br>
            Time to read : {(Text.length===0?0:Text[Text.length-1]===' '?Text.split(/[ ]+/).length-1 :Text.split(/[ ]+/).length ) *0.01} minutes
        </p>
        <h3>Preview :</h3>
        <p>{Text.length > 0? Text :"Please Enter some text to preview"}</p>
    </div>
    </>
  )
}
