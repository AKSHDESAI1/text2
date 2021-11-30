import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText1] = useState('');
    const handleUpClick = () => {
        console.log('Uppercase was clicked' + text.toUpperCase());
        // setText1('You have clicked on handleUpClick');
        setText1(text.toUpperCase());
        props.showalert1('Your Data has been converted Uppercase Successfully', 'Success', 'info')
        console.log(text);
    }
    const handleLoClick = () => {
        props.showalert1('Your Data has converted Lowercase Successfully', 'Success', 'success')
        setText1(text.toLowerCase());
    }
    const handleClearClick = () => {
        props.showalert1('Your Data has been removed Successfully', 'Success', 'info')
        setText1('');
    }
    const handleOnChange = (event) => {
        console.log('On change');
        setText1(event.target.value);
        console.log(text)
        let a = text.split(' ')
        return a;
    }
    const handlecopy = () => {

        navigator.clipboard.writeText(text);

    }

    // text = 'new text';
    // setText('new Text');

    return (
        <>
            <div className="container">

                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" disabled={text.length === 0} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-sm-2 my-2 my-sm-0" disabled={text.length === 0} onClick={handleLoClick}>Convert to LowerCase</button>
                {/* <br className='d-sm-none d-block' /> */}
                <button className="btn btn-info mx-2 " disabled={text.length === 0} onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-success mx-2 " disabled={text.length === 0} onClick={handlecopy}>Copy text</button>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(' ').length}, {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
            </div>
        </>
    )
}