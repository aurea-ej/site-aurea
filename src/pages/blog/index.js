import { React, useEffect } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Link } from "react-router-dom"

import aviaoAureaVertical from '../../imgs/aviaoAurea.png'

import './style.css';

export default function InfoCourses() {

    useEffect(() => {

        window.scrollTo(0, 0)

    }, []);

    return (

        <div id='Blog'>

            <Header />

            <main id='mainBlog'>

                <div className= 'testeee' >

                    <div className='caminhoAviao' >

                        <img src={aviaoAureaVertical} />

                    </div>

                    <div className='warning' >

                        <p>Em construção </p>

                    </div>

                </div>

                <div className= 'sendToLinkedin' >

                    <p>Enquanto isso, acesse nosso <a href = 'https://www.linkedin.com/company/aureaej/posts/?feedView=all' target='_blank' >Linkedin</a> e veja os últimos posts</p>

                </div>

            </main>
            
            <Footer />

        </div>

    )

}