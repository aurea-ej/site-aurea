import React, { useEffect, useState } from 'react'
import ViewModalMissionValuesEyesight from 'react-modal';
import teste from '../../imgs/Intro.gif'

import './style.css'

export default function ModalMissionValuesEyesight () {

    const [openModal,setOpenModal] = useState(true);

    const customStyles = {

        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            height: '100%',
            width: '100%'
        }

      };

    useEffect(() => {

        // setOpenModal(true);
        console.log('chegou no modal')

    })

    function closeModal () {

        // setTimeout(() => {
            setOpenModal(false)
            
        // }, 1600);
        
    }

    return (

        <ViewModalMissionValuesEyesight
            isOpen={openModal}
            // closeTimeoutMS={1600}
            // onAfterOpen={closeModal}
            style={customStyles}
        >

            <div className='teste' onClick={closeModal}>

                {/* <img src={teste} /> */}
                <h1>TESTE</h1>

            </div>

        </ViewModalMissionValuesEyesight>

    )

}