import React from 'react'

export default function About(props) {
    return (
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>About us:</h1>
           this is a very basic web app that we can use to make some changes in our texts easily.
           we can perform some basic tasks like converting a text to upper case or we can convert a uppercase text to lower case.
           this site is designed by sainath kendre by using reactJS.
        </div>
    )
}
