import React, { useState } from 'react'

export default function Utils(props) {
    const changetoUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success')
    }
    const clearText = () => {
        let newText='';
        setText(newText);
        props.showAlert('text cleared','success')
    }
    const changetolower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase','success')
    }
    const afterChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div >
                <h1 style={{color:props.mode==='dark'?'white':'black'}}> Utilizing text</h1>
                <div className="form-floating">

                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'grey',height:'200px'}} id="mybox" value={text} rows="3" onChange={afterChange}></textarea>
                </div>
                <br />
                <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={changetoUpper}>convert to uppercase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-1 my-2" onClick={changetolower}> convert to lowercase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={clearText}>clear text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
