import React from 'react'

function Header(props){
    let styles = {
        fontWeight:"bold",
        fontSize:"40px",
        color:"white",
        marginBottom:"15px",
        letterSpacing:"3px",
        marginTop:"20px",
        textAlign:"center"
    }

    return <header style={styles}>Harry Potter</header>
}

export default Header