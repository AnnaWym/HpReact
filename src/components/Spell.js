import React from 'react'

function Spell(props){
    let styles = {
        marginLeft:"auto",
        marginRight:"auto",
        width:"60%",
        textAlign:"center"
    }

    let czarStylBialy = {
        color:"white",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let czarStylZolty = {
        color:"yellow",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let czarStylCzerwony = {
        color:"red",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let stylOstateczny = czarStylBialy;

    if(props.niewybaczalne == "true"){
        stylOstateczny = czarStylCzerwony;
    }

    if(props.czar == "Lumos")
    {
        stylOstateczny = czarStylZolty    
    }


    return ( 
        <div style={styles}>
            <span style={stylOstateczny}>{props.czar}</span>

            {props.niewybaczalne == "true" ? <span> (niewybaczalne) </span> : ''}
            
            <br/><hr/>
        </div>
    )
}

export default Spell
