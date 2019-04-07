import React from 'react'
import pageStyle from '../Styles/pageStyle'
import SortingHat from './SortingHat'

function HomePage(props){
    
    return ( 
        <div style={pageStyle}>
            <SortingHat></SortingHat>
        </div>
    )
}

export default HomePage