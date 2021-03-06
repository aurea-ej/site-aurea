import { React, useEffect } from 'react'
import { useState } from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import { Link } from "react-router-dom"
import Lottie from 'react-lottie';

import leftArrow from '../../../imgs/leftArrow.png'
import rightArrow from '../../../imgs/rightArrow.png'
import eletricAnimation from '../../../imgs/eletricAnimation.json'

import '../style.css';

export default function InfoCourses(props) {

    const [current, setCurrent] = useState(0)
    const dataSlide = [

        {

            src: 'https://i.ibb.co/zfW8059/martelinho.jpg',
            title: 'Martelinho',
            txt: 'Texto qualquer bla bla bla mt loouco em'

        },
        {

            src: 'https://i.ibb.co/S0pnmtR/construgas.jpg',
            title: 'Construgás',
            txt: 'Texto qualquer bla bla bla mt loouco em'

        }
    ]
    const nextImage = () => {

        setCurrent(current === dataSlide.length - 1 ? 0 : current + 1)

    }
    const prevImage = () => {

        setCurrent(current === 0 ? dataSlide.length - 1 : current - 1)

    }
    const animationEletricConfig = {
        loop: true,
        autoplay: true, 
        animationData: eletricAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {

        window.scrollTo(0, 0)

    }, []);
   
    return (

        <div id='InfoCourses'>

            <Header />

            <section id='guiJogadorCaro' >

                {/* // <img src={wave} className='waveImage' /> */} 

                <div className="courseIntro">

                    <div className="courseName">

                        <h1>Elétrica</h1>

                    </div>

                    <div className="courseImage">

                        <Lottie
                            options={animationEletricConfig}
                            width={400}
                            
                        />

                    </div>

                </div>

            </section>

            <section id='courseServices' >

                <h1>Nossos serviços de elétrica</h1>

                <div className='courseServicesDiv'>

                    <div className='boxServicesCourse' >

                        <h3> Projeto Elétrico: </h3>

                        <p>Você conhece os benefícios de um projeto elétrico ? Junto à correta representação dos circuitos, eles asseguram os equipamentos elétricos e eletrônicos a serem utilizados em qualquer estabelecimento.Garanta já uma boa experiência, sem medo de quaisquer problemas e com a certeza de que as normas de segurança foram atendidas.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Eficiência Energética:</h3>

                        <p>Um projeto de eficiência energética visa a otimização de processos, atrelada a qualidade, agilidade e redução dos cursos.Contratando esse serviço, avaliamos a carga instalada e características de consumo da sua empresa para obter a solução mais eficiente e rápida.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Análise Tarifária:</h3>

                        <p>Já pensou em reduzir sua conta apenas com a mudança da tarifa ? É possível!Conhecendo a melhor tarifa para o consumidor de acordo com seus hábitos de consumo de energia, tamanho do estabelecimento e outros parâmetros técnicos, pode - se eliminar taxas e multas que possam estar sendo cobradas, o que faz uma grande diferença no fim do mês.Além disso, você aumenta a produtividade, garante melhores condições de trabalho e a sustentabilidade do seu estabelecimento.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Consultoria / Outros Serviços:</h3>

                        <p>Além dos serviços listados acima, também oferecemos consultoria e outros projetos e soluções na área de Engenharia Elétrica.
        Para maiores informações, entre em < Link to = '/Contato' > contato </Link> conosco.</p>

                    </div>

                </div>


            </section>

            <section id="Gom3sCamisa10" >

                <div className='coursesSlideProjects' >

                    <h2>Nossos projetos de Elétrica</h2>

                    {
                        dataSlide.map((item, index) => {

                            return (

                                <div className={index === current ? 'slide active' : 'slide'} key={index} >

                                    {index === current && (

                                        <div className='projectsCoursesDiv' >

                                            <img src={item.src} className='imgProjects' />

                                            <div className='arrows' >

                                                <img src={leftArrow} className='arrow-left' onClick={prevImage} />

                                                <img src={rightArrow} className='arrow-right' onClick={nextImage} />

                                            </div>
                                            
                                            <h3>{item.title}</h3>
                                            <p>{item.txt}</p>
                                            <p>Este foi um serviço de: {item.serviceType} {item.duration ? `e teve duração de: ${item.duration}.` : '.' }</p>
                                        
                                        </div>

                                    )}

                                </div>

                            )

                        })

                    }

                </div>

            </section>

            <Footer />

        </div>

    )

}