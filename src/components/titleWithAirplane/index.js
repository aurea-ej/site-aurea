import React, {createRef, useEffect} from 'react'

import './style.css'

import aviaoAurea from '../../imgs/aviaoAurea.png'
import aviaoAureaVertical from '../../imgs/aviaoAureaVertical.png'

export default function TitleWithAirplane (props) {

    // const text = createRef()

    // function typeWriter() {

    //     const textoArray = text.current.innerHTML.split('')

    //     text.current.innerHTML = ' ';

    //     for (let i = 0; i < textoArray.length; i++) 
    //         setTimeout(() => text.current.innerHTML += textoArray[i], 120 * i);

    // }

    // useEffect (()=> {

    //     typeWriter()

    // },[])

    // return (

    //     <div className='title' >

    //         <h1 ref={text}>{props.text}</h1>

    //         <img src={aviaoAurea} />

    //     </div>
    // )

    return (

        <div className='Aurea' >

            <h1>{props.text}</h1>
            
            <img src={aviaoAureaVertical} alt="símbolo da Aurea" />

        </div>

    )
}