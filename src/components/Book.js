import React from 'react'

function Book(props){
    let styles = {
        marginLeft:"auto",
        marginRight:"auto",
        width:"60%",
        textAlign:"center",
        opacity:"1.0 !important"
    }

    let haryPotterStyl = {
        color:"white",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let rok ={
        fontSize:"15px",
    }

    return ( 
        <div style={styles}>
            <span style={haryPotterStyl}>Harry Potter</span><br/> i {props.podtytul}
            <br/>
            <span style={rok}>Rok wydania: 1997</span>
            <hr/>
        </div>
    )
}

export default Book