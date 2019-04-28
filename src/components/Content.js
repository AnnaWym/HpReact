import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import HomePage from "./HomePage"
import BooksPage from "./BooksPage"
import SpellsPage from "./SpellsPage"
import HousesPage from "./HousesPage"
import CharactersPage from "./CharactersPage"
import "../Styles/menu.css"

function Content(){

    return (
        <Router>
            <div>
                <div className="menu">
                    <Link to="/">
                        <div className="option">
                        Strona Główna
                        </div>
                    </Link>

                    <Link to="/books" >
                        <div className="option">
                        Książki
                        </div>
                    </Link>

                    <Link to="/spells" >
                        <div className="option">
                        Zaklęcia
                        </div> 
                    </Link>

                    <Link to="/houses" >
                        <div className="option">
                        Domy
                        </div> 
                    </Link>

                    <Link to="/characters" >
                        <div className="option">
                        Postaci
                        </div> 
                    </Link>
                </div>
                
                <Route exact path="/" component={HomePage} />
                <Route path="/books" component={BooksPage} />
                <Route path="/spells" component={SpellsPage}/>
                <Route path="/houses" component={HousesPage}/>
                <Route path="/characters" component={CharactersPage}/>
            </div>
        </Router>
    )
}

export default Content