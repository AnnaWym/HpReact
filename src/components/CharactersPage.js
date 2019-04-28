import React from 'react'
import Character from './Character'
import pageStyle from '../Styles/pageStyle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class CharactersPage extends React.Component{
    constructor(){
        super();

        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        fetch("https://www.potterapi.com/v1/characters?key=$2a$10$Nmdn5WOVSxH27I4faNa3LuaP0CcfrXRd9Aq.EXwWkww86zdLKhi8W")
        .then((result) =>{
            return result.json();
        })
        .then((json) =>{
            let arrayOfCharacters = [];
            Object.keys(json).forEach(function(key) {
                arrayOfCharacters.push(json[key]);
            });

            this.setState({
                characters: arrayOfCharacters
            });
            console.log(json[0])
        })
    }

    render(){
        
        let characterComponents = this.state.characters.map(character => 
            <Character key={character._id} osoba={character}/>     
        )

        return (
            <div style={pageStyle}>
                <Container>
                    <Row>
                        {characterComponents}
                    </Row>
                </Container>
            </div>
        )
    }
}



export default CharactersPage