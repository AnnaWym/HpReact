import React from 'react'
import tiara from "../images/tiara.jpg"
import gryffindor from "../images/herby/gryffindor.JPG"
import slytherin from "../images/herby/slytherin.JPG"
import ravenclaw from "../images/herby/ravenclaw.JPG"
import hufflepuff from "../images/herby/hufflepuff.JPG"

let sortingHatStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
    height: "500px",
    textAlign: "center",
    paddingTop: "80px",
    fontWeight:"bold",
}

let img = {
    width: "250px",
    height: "300px",
    cursor: "pointer",
}

let herbStyle = {
    width: "250px",
    height: "300px",
    cursor: "pointer",
    display: "none",
}

let tytulStyle = {
    fontWeight:"bold",
    textAlign: "center",
}

class SortingHat extends React.Component{
    callApi(){
        fetch("https://www.potterapi.com/v1/sortingHat")
        .then((result) =>{
            return result.json();
        })
        .then((jsonResult) =>{
            //to wykonuje się po przyjściu odpowiedzi
            //odpowiedź w jsonResult

            this.ukryjTiare();

            this.pokazHerb(jsonResult);
        })
    }

    ukryjTiare(){
        document.getElementById("tiara").style.display = "none";
        document.getElementById("tytul").style.display = "none";
    }

    pokazHerb(herb){
        if (herb === "Gryffindor") {
            document.getElementById("gryfon").style.display = "";
        }
        if (herb === "Slytherin") {
            document.getElementById("slizgon").style.display = "";
        }
        if (herb === "Ravenclaw") {
            document.getElementById("krukon").style.display = "";
        } 
        if (herb === "Hufflepuff") {
            document.getElementById("puchon").style.display = "";
        } 
    }

    reset(){
        //po kliknięciu zdj herbu - znika
        let listaHerbow = document.getElementsByClassName("herb");
        for (let index = 0; index < listaHerbow.length; index++) {
            const element = listaHerbow[index];
            element.style.display = "none"; 
        }
        //pojawia się zdjęcie tiary
        document.getElementById("tiara").style.display = "";
        document.getElementById("tytul").style.display = "";
    }

    render(){
        return <div style={sortingHatStyle}>
            <p id="tytul" style={tytulStyle}>LOSUJ DOM</p>
            <img id="tiara" alt="" onClick={() => this.callApi()} style={img} src={tiara}></img>
            <img className="herb" id="gryfon" alt="" onClick={() => this.reset()} style={herbStyle} src={gryffindor}></img>
            <img className="herb" id="slizgon" alt="" onClick={() => this.reset()} style={herbStyle} src={slytherin}></img>
            <img className="herb" id="krukon" alt="" onClick={() => this.reset()} style={herbStyle} src={ravenclaw}></img>
            <img className="herb" id="puchon" alt="" onClick={() => this.reset()} style={herbStyle} src={hufflepuff}></img>
        </div>;
    }
}

export default SortingHat