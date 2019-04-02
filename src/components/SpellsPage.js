import React from 'react'
import Spell from './Spell'
import pageStyle from '../Styles/pageStyle'


function SpellsPage(props){

    return (
        <body style={pageStyle}>
        <Spell czar="Lumos"/>
        <Spell czar="Nox"/>
        <Spell czar="Bombarda Maxima"/>  
        <Spell czar="Revelio"/>
        <Spell czar="Expelliarmus"/>
        <Spell czar="Accio"/>
        <Spell czar="Petrificus Totalus"/>
        <Spell czar="Alohomora"/>
        <Spell czar="Wingardium Leviosa"/>
        <Spell czar="Protego"/>
        <Spell czar="Obliviate"/>
        <Spell czar="Expecto Patronum"/>
        <Spell czar="Riddikulus"/>
        <Spell czar="Reparo"/>
        <Spell czar="Incendio"/>
        <Spell czar="Priori Incantatem"/>
        <Spell czar="Sectumsempra"/>
        <Spell czar="Legilimens"/>
        <Spell czar="Confundo"/>
        <Spell czar="Avada Kedavra" niewybaczalne="true"/>
        <Spell czar="Cruccio" niewybaczalne="true"/> 
        <Spell czar="Imperio" niewybaczalne="true"/> 
        </body>

    )
}

export default SpellsPage