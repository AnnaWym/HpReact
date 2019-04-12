import React from 'react'

function Spell(props){
    let styles = {
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom: "20px",
        borderBottom: "2px solid white",
        width:"60%",
        textAlign:"center",
    }

    let czarStylBialy = {
        color:"white",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center"
    }

    let efektStyle = {
        color:"white",
        fontWeight:"normal",
        textAlign:"center",
        fontSize: "15px",
    }


    return ( 
        <div style={styles}>
            <span style={czarStylBialy}>{props.czar}</span><br/>
            <span style={efektStyle}>{props.efekt}</span><br/>
            <span style={efektStyle}>{props.typ}</span>
            <br/><hr/>
        </div>
    )
}


export default Spell

