import React from 'react'
import Col from 'react-bootstrap/Col'

function Book(props){
    let styles = {
        textAlign:"center",
        opacity:"1.0 !important",
        marginBottom: "20px",
        width: "300px",
        marginRight: "auto",
        marginLeft: "auto",
        
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

    let img = {
        width: "250px",
        height: "300px",
    }

    return ( 
        <Col md={6} lg={6}>
            <div style={styles}>
                <img style={img} src={props.dane.okladka}></img><br/>
                <span style={tytulStyl}>{props.dane.tytul}</span><span style={podtytulStyl}>{props.dane.podtytul}</span><br/>
                <span style={rokStyl}>Data premiery: {props.dane.dataPremiery}</span><br/>
                <span style={rokStyl}>Data premiery w Polsce: {props.dane.dataPremieryPl}</span>
            </div>
        </Col>
    )
}

export default Book