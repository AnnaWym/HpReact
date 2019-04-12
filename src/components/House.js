import React from 'react'

function House(props){
    let styles = {
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom: "20px",
        borderBottom: "2px solid white",
        width:"60%",
        textAlign:"center",
        opacity:"1.0 !important",
    }

    let info ={
        fontSize:"16px",
        fontWeight:"bold",
    }

    let info2 ={
        fontSize:"16px",
    }

    let domCzerwony = {
        color:"red",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let domZielony = {
        color:"green",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let domZolty = {
        color:"yellow",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let domNiebieski = {
        color:"blue",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let stylDomow = {};

    if(props.dane.dom === "Gryffindor")
    {
        stylDomow = domCzerwony    
    }

    if(props.dane.dom === "Slytherin")
    {
        stylDomow = domZielony    
    }

    if(props.dane.dom === "Hufflepuff")
    {
        stylDomow = domZolty   
    }

    if(props.dane.dom === "Ravenclaw")
    {
        stylDomow = domNiebieski    
    }

    return ( 
        <div style={styles}>
            <span style={stylDomow}>{props.dane.dom}</span><br/>
            <span style={info}>Opiekun domu:</span><span style={info2}> {props.dane.opiekun}</span><br/>
            <span style={info}>Twórca domu:</span><span style={info2}> {props.dane.tworca}</span><br/>
            <span style={info}>Duch domu:</span><span style={info2}> {props.dane.duch}</span><br/>
            <span style={info}>Symbol domu:</span><span style={info2}> {props.dane.symbol}</span><br/>
            <hr/>
        </div>
    )
}

export default House