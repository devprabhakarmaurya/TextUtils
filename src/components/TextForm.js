import React,{useState} from 'react';

export default function TextForm(props) {

    const [text,setText] = useState("");

    
     function onUpClickHandler(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    function onLowClickHandler(){
        let newText=  text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    function onClearClickHandler(){
        setText("");
        props.showAlert("Cleared text","success");
    }
    function onCopyClickHandler(){
        let textForCopy = document.getElementById('my-box')
        textForCopy.select();
        navigator.clipboard.writeText(textForCopy.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");
    }
  return (
  <>
    <h1 style={{color:props.mode === "light"? "black":"white" }}>TextUtils - Word Counter, Convert Case & Character Counter</h1>
    <textarea className="form-control mb-3" value={text} onChange={(event)=>setText(event.target.value)} id="my-box" rows="8" style={{backgroundColor: props.mode === "light"? "white":"#002b49",color:props.mode === "light"? "black":"white" }}></textarea>
    <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={onUpClickHandler}>To Upper Case</button>
    <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={onLowClickHandler}>To Lower Case</button>
    <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={onCopyClickHandler}>Copy Text</button>
    <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={onClearClickHandler}>Clear Text</button>
    <h2 className="my-3" style={{color:props.mode === "light"? "black":"white" }}>Your Text Summary</h2>
    <p style={{color:props.mode === "light"? "black":"white" }}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
    <p style={{color:props.mode === "light"? "black":"white" }}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
  </>
  )
}
