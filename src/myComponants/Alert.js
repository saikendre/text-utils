import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'50px'}}>
        {props.alert &&<div>
         <div className="alert alert-warning alert-dismissible fade show mx-1" role="alert" >
                <strong>{props.alert.type}</strong>: {props.alert.msg}
            </div>
        </div>}
        </div>
    )
}
