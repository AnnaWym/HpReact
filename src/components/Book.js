import React from 'react'

function Book(props){
    let styles = {
        marginLeft:"auto",
        marginRight:"auto",
        width:"60%",
        textAlign:"center",
        opacity:"1.0 !important",
        marginBottom: "20px",
        
    }

    let tytulStyl = {
        color:"white",
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center",
        marginRight: "5px",
    }

    let podtytulStyl = {
        color:"white",
        fontStyle:"italic",
        textAlign:"center"
    }

    let rokStyl ={
        color:"white",
        textAlign:"center",
        fontSize:"15px",
        fontWeight:"600",
        
    }

    return ( 
        <div style={styles}>
            <span style={tytulStyl}>{props.dane.tytul}</span><span style={podtytulStyl}>{props.dane.podtytul}</span><br/>
            <span style={rokStyl}>Data premiery: {props.dane.dataPremiery}</span><br/>
            <span style={rokStyl}>Data premiery w Polsce: {props.dane.dataPremieryPl}</span>
        </div>
    )
}

export default Book