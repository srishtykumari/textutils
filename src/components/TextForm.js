 import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react'

export default function TextForm(props) {
 const handleUpClick = () =>{
  //console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText (newText)
  props.showAlert("Converted to uppercase!","success");
 }
 const handleLoClick = () =>{
  console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText (newText)
  props.showAlert("Converted to lowercase!","success");
 }
 const handleClearClick = () =>{
  let newText = '';
  setText (newText)
  props.showAlert("ClearText!","success");
 }


 const handleOnChange = (event) =>{
  console.log("On change");
  setText(event.target.value)
 }


  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <h1 className="mb-4">{props.heading}</h1>
    <div className="mb-3"  >
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="9"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>

    </>
  )
}
