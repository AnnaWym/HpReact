import React from 'react'
import House from './House'
import pageStyle from '../Styles/pageStyle'
import domy from '../dane/domy'

function HousesPage(props){
    
    return ( 
        <div style={pageStyle}>
            <House dane={domy.domGryffindor}/>
            <House dane={domy.domSlytherin}/>
            <House dane={domy.domHufflepuff}/>
            <House dane={domy.domRavenclaw}/> 
        </div>
    )
}

export default HousesPage