import React from 'react'

import './style.css'

// import aviaoAurea from '../../imgs/aviaoAurea.png'
import aviaoAureaVertical from '../../imgs/aviaoAureaVertical.png'

export default function TitleWithAirplane (props) {

    return (

        <div className='Aurea' >

            <h1>{props.text}</h1>
            
            <img src={aviaoAureaVertical} alt="símbolo da Aurea" />

        </div>

    )
}