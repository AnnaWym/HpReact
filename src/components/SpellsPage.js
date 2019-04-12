import React from 'react'
import Spell from './Spell'
import pageStyle from '../Styles/pageStyle'

class SpellsPage extends React.Component{
    constructor(){
        super();

        this.state = {
            spells: []
        }
    }

    componentDidMount(){
        fetch("https://www.potterapi.com/v1/spells?key=$2a$10$Nmdn5WOVSxH27I4faNa3LuaP0CcfrXRd9Aq.EXwWkww86zdLKhi8W")
        .then((result) =>{
            return result.json();
        })
        .then((json) =>{
            let arrayOfSpells = [];
            Object.keys(json).forEach(function(key) {
                arrayOfSpells.push(json[key]);
            });

            this.setState({
                spells: arrayOfSpells
            });
            console.log(json[0])
        })
    }

    render(){
        
        let spellComponents = this.state.spells.map(spell => 
            <Spell key={spell._id} czar={spell.spell} efekt={spell.effect} typ={spell.type}/>     
        )

        /*let spellComponents = this.state.spells.map(spell => 
            {
                if(spell.type=="Charm"){
                    return <Spell key={spell._id} czar={spell.spell} efekt={spell.effect} typ={spell.type}/>
                }
            }
        )
         */
        
        return (
            <div style={pageStyle}>
                {spellComponents}
            </div>
        )
    }
}

export default SpellsPage