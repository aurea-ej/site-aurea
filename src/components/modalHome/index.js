import React, { useEffect, useState } from 'react'
import ViewModal from 'react-modal';
import teste from '../../imgs/Intro.gif'

import './style.css'

export default function Mod () {

    const [openModal,setOpenModal] = useState(false);

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

        setOpenModal(true);

    })

    function closeModal () {

        setTimeout(() => {
            setOpenModal(false)
            
        }, 1000);
        
    }

    return (

        <ViewModal
            isOpen={openModal}
            closeTimeoutMS={1000}
            onAfterOpen={closeModal}
            style={customStyles}
        >

            <div className='teste'>

                <img src={teste} />

            </div>

        </ViewModal>

    )

}