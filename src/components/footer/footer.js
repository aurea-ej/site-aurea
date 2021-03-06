import React from 'react'
import { Link } from "react-router-dom";

import './footerStyle.css'

import instagramIcon from '../../imgs/instagramIcon.png'
import facebookIcon from '../../imgs/facebookIcon.png'
import linkedinIcon from '../../imgs/linkedinIcon.png'
import logoAurea from '../../imgs/logoAurea2.png'

export default function Footer (props) {

    return (

        <footer>

            <div className='copyright' >

                <p>Copyright Aurea Soluções e Projetos</p>
                
                <p>Desenvolvido por :</p>

                <img src={logoAurea} alt='logoAurea' />
               

            </div>

            <div className='address' >

                <ul>
                    <li> <Link to='/' > Início </Link> </li>
                    <li> <Link to='/Quem-somos-nos'> Quem Somos </Link> </li>
                    <li> <a href='/#services'> Serviços </a> </li>
                    <li> <Link to='/Contato'> Contato </Link> </li>
                    <li> <Link to='/Blog'> Blog </Link> </li>
                </ul>

                <p>R. Dr. Siqueira, 273 - Parque Dom Bosco, Campos dos Goytacazes - RJ, 28030-130IFF Sala G-02</p>

                <p>Whatsapp: (21) 99015-7124</p>
                
            </div>

            <div className='socialMedias' >

                <a href='https://www.instagram.com/aureaej/'  > <img src={instagramIcon} alt='logoInstagram' /> </a>
                <a href='https://www.facebook.com/aureaej'  > <img src={facebookIcon} alt='logoFacebook' /> </a>
                <a href='https://www.linkedin.com/company/aureaej/'  > <img src={linkedinIcon} alt='logoLinkedin' /> </a>

            </div>


        </footer>

    )
}