import React from 'react'
import Book from './Book'
import pageStyle from '../Styles/pageStyle'
import ksiazki from '../dane/ksiazki'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function BooksPage(props){

    return ( 
        <body style={pageStyle}>
        <Container>
            <Row>
                <Book dane={ksiazki.HP1}/>
                <Book dane={ksiazki.HP2}/>
                <Book dane={ksiazki.HP3}/>
                <Book dane={ksiazki.HP4}/>
                <Book dane={ksiazki.HP5}/>
                <Book dane={ksiazki.HP6}/>
                <Book dane={ksiazki.HP7}/>
            </Row>
        </Container>
        </body>
    )
}

export default BooksPage