import React from 'react'
import Book from './Book'
import pageStyle from '../Styles/pageStyle'

function BooksPage(props){

    return ( 
        <body style={pageStyle}>
            <Book podtytul="Kamień Filozoficzny"/>
            <Book podtytul="Komnata Tajemnic"/>
            <Book podtytul="Więzień Azkabanu"/>
            <Book podtytul="Czara Ognia"/>
            <Book podtytul="Zakon Feniksa"/>
            <Book podtytul="Książe Półkrwi"/>
            <Book podtytul="Insygnia Śmierci"/>
        </body>
    )
}

export default BooksPage