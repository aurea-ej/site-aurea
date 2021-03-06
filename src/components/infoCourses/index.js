import { React } from 'react'
import { useEffect, useState, useRef } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import courseImg from '../../imgs/arqUrb.png'
import photo1 from '../../imgs/mission.jpg'
import photo2 from '../../imgs/values.jpg'
import photo3 from '../../imgs/eyesight.jpg'
import leftArrow from '../../imgs/leftArrow.png'
import rightArrow from '../../imgs/rightArrow.png'

import './style.css';

import wave from '../../imgs/wave5.png'

export default function InfoCourses(props) {

    const [current, setCurrent] = useState(0)
    const dataSlide = [

        {

            src: photo1,
            title: 'titulo 1 de texto',
            txt: 'Texto qualquer bla bla bla mt loouco em'

        },
        {

            src: photo2,
            title: 'titulo 2 de texto',
            txt: 'Texto qualquer bla bla bla mt loouco em'

        },
        {

            src: photo3,
            title: 'titulo 3 de texto',
            txt: 'Texto qualquer bla bla bla mt loouco em'

        }
    ]
    const nextImage = () => {

        setCurrent( current === dataSlide.length - 1 ? 0 : current + 1 )
        
    }
    const prevImage = () => {

        setCurrent( current === 0 ? dataSlide.length - 1 : current - 1 )

    }

    return (

        <div id='InfoCourses'>

            <Header />

            <section id='guiJogadorCaro' >

                {/* // <img src={wave} className='waveImage' /> */} 

                <div className="courseIntro">

                    <div className="courseName">

                        <h1>Arquitetura</h1>

                    </div>

                    <div className="courseImage">

                        <img src={courseImg} />

                    </div>

                </div>

            </section>

            <section id='courseServices' >

                <h1>Nossos serviços de arquitetura</h1>

                <div className='courseServicesDiv'>

                    <div className='boxServicesCourse' >

                        <h3> Projeto Arquitetônico: </h3>

                        <p>Já  teve vontade de morar em um espaço pensado exclusivamente para o seu estilo de vida? O projeto de arquitetura te oferece isso!
                        Ambientes definidos para unir funcionalidade e estética, se adequando às suas necessidades e desejos. Criamos um projeto personalizado, com o principal objetivo de realizar o seu sonho.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Projeto de Reforma:</h3>

                        <p>Se você tem vontade de mudar algum ambiente da sua casa mas nunca tirou do papel,  a hora é agora. 
                        Com o objetivo de resolver os problemas do seu imóvel e realizar as mudanças necessárias de forma rápida e eficiente, a reforma te oferece as melhores soluções de projeto para você colocar todos os planos e sonhos na prática.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Projeto de Interiores:</h3>

                        <p>Já pensou em planejar algum espaço interno mas não sabe por onde começar? Esse projeto visa proporcionar um melhor conforto e aproveitamento do ambiente, além de adequá-lo às necessidades específicas de cada cliente.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Projeto de Legalização:</h3>

                        <p>Precisa legalizar o seu imóvel? 
                        O serviço de projeto de legalização oferece toda a parte técnica e acompanhamentos  necessários para a regularização.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Projeto Paisagístico:</h3>

                        <p>Procura trazer a natureza para mais perto? 
                        Reformar ou criar um espaço de contemplação e convivência? 
                        Os projetos paisagísticos visam elaborar soluções para ambientes que combinem botânica e ecologia, cores e formatos para gerar um resultado harmonioso e agradável.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Projeto Luminotécnico:</h3>

                        <p>Você sabia que uma iluminação não adequada ao uso do ambiente pode provocar sérios problemas aos usuários?
                        Que tal consertar isso com um projeto que ofereça o melhor de conforto lumínico, estético e visual, para o ambiente em questão? 
                        O projeto luminotécnico visa criar espaços pensados estrategicamente para que os usuários tenham a melhor vivência do ambiente projetado de acordo com as necessidades a serem atendidas.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Consultoria/Outros Serviços:</h3>

                        <p>Além dos serviços listados a cima, também oferecemos consultoria e outros projetos e soluções na área de Arquitetura e Urbanismo.
                        Para maiores informações, entre em contato conosco.</p>
                    </div>

                </div>


            </section>

            <section id="Gom3sCamisa10" >

                <div className='coursesSlideProjects' >

                    <h2>Nossos projetos de Arquitetura</h2>

                    <img src={leftArrow} className='arrow-left' onClick={prevImage} />

                    {
                        dataSlide.map((item, index) => {

                            return (

                                <div className={index === current ? 'slide active' : 'slide'} key={index} >

                                    {index === current && (

                                        <div className='projectsCoursesDiv' >

                                            <img src={item.src} className='imgProjects' />
                                            
                                            <h1>{item.title}</h1>
                                            <p>{item.txt}</p>
                                        
                                        </div>

                                    )}

                                </div>

                            )

                        })

                    }

                    <img src={rightArrow} className='arrow-right' onClick={nextImage} />

                </div>

            </section>

            {/* <section id="ViniciusZone">

                <div className="slider-projects-v">

                    <div className="slide-v">
                        <img src={courseImg} />
                        <div className="slide-infos-v">
                            <h2>Projetinho Toper</h2>
                            <p>Esse foi um projeto top demais, muito top, maneiro, legal</p>
                        </div>
                    </div>
                    <div className="slide-v">
                        <img src={courseImg} />
                        <div className="slide-infos-v">
                            <h2>Outro Projetinho Toper</h2>
                            <p>Esse foi um outro projeto top demais, muito top, maneiro, legal</p>
                        </div>
                    </div>
                    <div className="slide-v">
                        <img src={courseImg} />
                        <div className="slide-infos-v">
                            <h2>Mais um Projetinho Toper</h2>
                            <p>Esse foi mais um projeto top demais, muito top, maneiro, legal</p>
                        </div>
                    </div>

                </div>

            </section> */}

            <Footer />

        </div>

    )

}