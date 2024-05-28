import React,{useState} from "react";


export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase","success");
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showalert("Text Cleared","success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text)
    props.showalert("Copied to Clipboard","success");
  }
  const handleInverseClick=()=>{
    var newText = "";
    for(let i=0;i<text.length;i++){
        if(text[i]===text[i].toLowerCase()){
            newText+=text[i].toUpperCase();
        }
        else{
            newText+=text[i].toLowerCase();
        }
    }
    setText(newText);
    props.showalert("Converted to Inverse Case","success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const [text,setText] = useState('');
  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse Case</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button onClick={speak} className="btn btn-primary mx-1">Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text in the textbox to preview it here'}</p>
    </div>
    </>
  );
}
