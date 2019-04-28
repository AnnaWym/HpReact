import React from 'react'
import Col from 'react-bootstrap/Col'
import { If, Then, Else } from 'react-if'

function Character(props){

    let styles = {
        textAlign:"center",
        opacity:"1.0 !important",
        marginBottom: "20px",
        height: "305px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: "#3f5a84",
        borderRadius: "10px"
    }

    let styleName = {
        fontSize: "17px",
        fontWeight: "bold",
    }

    let styleInfo = {
        fontSize: "15px",
        textAlign:"left",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "5px",
    }

    return ( 
        <Col md={4} lg={4}>
            <div style={styles}>
                <span style={styleName}>{props.osoba.name}</span><br/>
                <div style={styleInfo}>
                    <If condition={props.osoba.alias != null}>
                        <Then>
                            <span>Alias: <i>{props.osoba.alias}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.school != null}>
                        <Then>
                            <span>School: <i>{props.osoba.school}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.house != null}>
                        <Then>
                            <span>House: <i>{props.osoba.house}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.wand != null}>
                        <Then>
                            <span>Wand: <i>{props.osoba.wand}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.patronus != null}>
                        <Then>
                            <span>Patronus: <i>{props.osoba.patronus}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.bloodStatus != null}>
                        <Then>
                            <span>Blood Status: <i>{props.osoba.bloodStatus}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.role != null}>
                        <Then>
                            <span>Role: <i>{props.osoba.role}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.species != "human"}>
                        <Then>
                            <span>Species: <i>{props.osoba.species}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.boggart != null}>
                        <Then>
                            <span>Boggart: <i>{props.osoba.boggart}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.animagus != null}>
                        <Then>
                            <span>Animagus: <i>{props.osoba.animagus}</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.dumbledoresArmy == true}>
                        <Then>
                            <span>Dumbledores Army: <i>Yes</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.orderOfThePhoenix == true}>
                        <Then>
                            <span>Order Of The Phoenix: <i>Yes</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.deathEater == true}>
                        <Then>
                            <span>Death Eater: <i>Yes</i></span><br/>
                        </Then>
                    </If>
                    <If condition={props.osoba.ministryOfMagic == true}>
                        <Then>
                            <span>Ministry Of Magic: <i>Yes</i></span><br/>
                        </Then>
                    </If>

                    <br/><hr/>
                </div>
            </div>
        </Col>
    )
}






export default Character