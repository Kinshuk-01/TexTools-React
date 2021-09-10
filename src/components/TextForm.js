import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase successfully.","success");
    }
    
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase successfully.","success");
    }
    
    const handleChange = (event) =>{
        setText(event.target.value);
    }
    
    const handleClear = () =>{
        setText("");
        props.showAlert("Text cleared successfully.","success");
    }
    
    const handleCopy = () =>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to keyboard successfully.","success");
    }
    
    const handleSpaces = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces successfully.","success");
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Upper case</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleClear} disabled={text.length===0}>Clear All</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length===0}>Convert to Lower case</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpaces} disabled={text.length===0}>Remove Extra spaces</button>
        </div>
        <div className="container my-4">
            <h3>Your Text Summary</h3>
            <p> <b>• Number of words:</b> {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
            <p> <b>• Number of Characters:</b> {text.length}</p>
            <p> <b>• Minutes to read:</b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mins</p>

            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview!!"}</p>
        </div>
        </>
    )
}


