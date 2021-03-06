import {useEffect, useState, useRef} from 'react'
import './style.css';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';

import firebase from 'firebase/app'
import "firebase/analytics";
import firebaseConfig from '../../FIREBASECONFIG.js'

import whatsappIcon from '../../imgs/whatsappIcon.png'

import flyingLogo from '../../imgs/flyingLogo.png'
import mascoteAurea from '../../imgs/mascoteAurea3.png'
import membersIcon from '../../imgs/membersIcon.png'
import awardIcon from '../../imgs/awardIcon.png'
import projectsIcon from '../../imgs/projectsIcon.png'

import animationData from '../../imgs/compAnimation.json'
import eletricAnimation from '../../imgs/eletricAnimation.json'
import arqAnimation from '../../imgs/arqAnimation.json'
import autoAnimation from '../../imgs/autoAnimation.json'

function Home() {

    const wppIcon = useRef()

    function scrolling() {

        const infoServices = Array.from(document.querySelectorAll('b'))

        const seeMoreServices = Array.from(document.querySelectorAll('.servicesBack a'))

        const whatsappButton = Array.from(document.querySelectorAll('.whatsappButton a'))

        infoServices.forEach((item) => {

            if(item.getBoundingClientRect().top < window.innerHeight ){
                item.style.opacity = 1
                item.style.animation = 'teste 2s linear'
            }

        } )
        
        seeMoreServices.forEach((item) => {

            if(item.getBoundingClientRect().top < window.innerHeight ){
                item.style.opacity = 1
                item.style.animation = 'teste 2s linear'
            }
            
        } )
        
        whatsappButton.forEach((item) => {

            if(item.getBoundingClientRect().top == window.innerHeight ){
    
                item.style.display = 'none'
                console.log(whatsappButton)
    
            }
            
        } )
        
        
    }

    useEffect(() => {

        window.onscroll = () => scrolling(); 

        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
            firebase.analytics()
        }
        
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const animationEletricConfig = {
        loop: true,
        autoplay: true, 
        animationData: eletricAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const animationArqConfig = {
        loop: true,
        autoplay: true, 
        animationData: arqAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const animationAutoConfig = {
        loop: true,
        autoplay: true, 
        animationData: autoAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (

        <div className="Home" >

            <Header />

            <main id='mainHome'>

                <div id='presentationDiv' >

                    <div className='phraseIntro'>

                        <h1>O que podemos</h1>
                        <h1>alcan??ar juntos? </h1>

                        <div className='descIntro'>

                            <p>Somos uma empresa j??nior fundada em 2016 que presta servi??os na ??rea de engenharia e arquitetura. </p>

                        </div>
                        
                    </div>

                    <img src={flyingLogo} />

                </div>

            </main>

            <section id='services' className='flexCol sectionHome' >

                <h1>Realizamos solu????es de:</h1>

                <div className='descIntro'>

                    <p>Selecione um curso para ver o portif??lio e todos os servi??os que ele oferece</p>

                </div>

                <div className='matrixServices' >

                    <div className='rowMatrixServices' >

                        <div className='boxServices'>

                            <h3>Arquitetura e urbanismo</h3>

                            <Link to='/servicos/Arquitetura/' >

                                <Lottie 
                                    options={animationArqConfig}
                                    height={220}
                                    width={400}
                                />
                                {/* <img src={arqUrb} alt='servi??os de arquitetura e urbanismo'/> */}

                            </Link>

                            <div className='servicesBack'>

                                <b>Projeto de reforma</b>
                                <b>Projeto de interiores</b>
                                <Link to='/servicos/Arquitetura' ><b>Ver mais</b></Link>

                            </div>

                        </div>

                        <div className='boxServices marginTop' >

                            <h3>Engenharia de computa????o</h3>

                            <Link to='/servicos/Computacao' >

                                <Lottie 
                                    options={defaultOptions}
                                    height={220}
                                    width={400}
                                />
                                
                                {/* <img src={engCom} alt='engenharia de computa????o' /> */}

                            </Link>

                            <div className='servicesBack' >

                                <b>Aplicativos m??veis</b>
                                <b>Cria????o de sites</b>
                                <Link to='/servicos/Computacao' ><b>Ver mais</b></Link>

                            </div>

                        </div>

                    </div>

                    <div className='rowMatrixServices' >

                        <div className='boxServices marginTop' >

                            <h3>Engenharia el??trica</h3>

                            <Link to='/servicos/Eletrica' >

                                <Lottie
                                    options={animationEletricConfig}
                                    height={220}
                                    width={400}
                                />

                                {/* <img src={engEle} alt='engenharia el??trica' /> */}

                            </Link>

                            <div className='servicesBack marginTopServicesBack' >

                                <b>An??lise tarif??ria</b>
                                <b>Projeto el??trico</b>
                                <Link to='/servicos/Eletrica' ><b>Ver mais</b></Link>

                            </div>

                        </div>

                        <div className='boxServices marginTop' >

                            <h3>Eng. de controle e automa????o</h3>

                            <Link to='/servicos/Automacao' >

                                <Lottie
                                    options={animationAutoConfig}
                                    height={220}
                                    width={400}
                                />
                                
                            </Link>

                            <div className='servicesBack' >

                                <b>Automa????o de ambientes</b>
                                <b>Fechaduras eletr??nicas</b>
                                <Link to='/servicos/Automacao' ><b>Ver mais</b></Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className='aboutUs'>

                <div className='whyUs' >

                    <h3>Por que escolher a Aurea?</h3>

                    <p>A Aurea ?? uma empresa <strong>sem fins lucrativos</strong>, composta 100% por estudantes graduandos do IFF Centro. Toda renda ?? reinvestida em conhecimento para nossos membros, atrav??s de cursos, equipamentos, infraestrutura e etc. Todos s??o volunt??rios e est??o aqui para se desenvolver profissionalmente e realizar sonhos. Todos os nossos projetos s??o supervisionados por professores orientadores, que garantem a qualidade do mesmo! s??o 5 anos de exist??ncia <strong>realizando sonhos</strong>. E a??, o que podemos alcan??ar juntos?.</p>   

                </div>

                <div className='parceiros'>
                    <h3> Nossos Parceiros </h3>
                    <div className='parceirosLogos'>
                        <div>
                            <a target='_blank' href='https://brasiljunior.org.br/'>
                                <img src='https://i.ibb.co/30tg4SD/logo-brasil-junior.png'/>
                            </a>
                        </div>
                        <div>
                            <a target='_blank' href='http://www.riojunior.com.br/'>
                                <img src='https://i.ibb.co/QCnDvbX/rio-junior-2.png'/>
                            </a>
                        </div>
                        <div>
                            <a target='_blank' href='https://portal1.iff.edu.br/'>
                                <img src='https://i.ibb.co/Jcwy78D/logo-camposcentro-vertical2.png'/>
                            </a>
                        </div>
                        <div>
                         <a target='_blank' href='https://embrapii.org.br/en/'>
                                <img src='https://i.ibb.co/7v2ZLdq/Logo-embrapi-1.png'/>
                            </a>       
                        </div>
                    </div>
                </div>

                {/* <div className='accountants' >

                    <div className='counter'>

                        <img src={projectsIcon}/>
                        <strong>125</strong>
                        <p>Projetos realizados</p>

                    </div>

                    <div className='counter'>

                        <img src={membersIcon}/>
                        <strong>32</strong>
                        <p>Membros</p>

                    </div>

                    <div className='counter'>

                        <img src={awardIcon}/>
                        <strong>8</strong>
                        <p>Premia????es</p>

                    </div>

                </div> */}

            </section>
                        
            {/* <section id='feedbacks' className='flexCol sectionHome' > */}
            
            <div className='whatsappButton' >

                <a href="https://api.whatsapp.com/send?phone=552199015-7124&text=Como%20podemos%20te%20ajudar?" target="_blank" >
                    <img src={whatsappIcon} ref={wppIcon} />
                </a>

            </div>

            <Footer />

        </div>

    );
}

export default Home;
