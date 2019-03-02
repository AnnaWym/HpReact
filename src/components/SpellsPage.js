import React from 'react'
import Spell from './Spell'
import pageStyle from '../Styles/pageStyle'


function SpellsPage(props){

    return (
        <body style={pageStyle}>
        <Spell czar="Lumos"/>
        <Spell czar="Nox"/>
        <Spell czar="Bombarda Maxima"/>  
        <Spell czar="Avada Kedavra" niewybaczalne="true"/>
        <Spell czar="Cruccio" niewybaczalne="true"/>  
        </body>

    )
}

export default SpellsPage