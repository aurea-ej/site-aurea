import { React, useEffect } from 'react'
import { useState } from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import { Link } from "react-router-dom"
import Lottie from 'react-lottie';

import leftArrow from '../../../imgs/leftArrow.png'
import rightArrow from '../../../imgs/rightArrow.png'
import compAnimation from '../../../imgs/compAnimation.json'

import '../style.css';

export default function InfoCourses(props) {

    const [current, setCurrent] = useState(0)

    const dataSlide = [

        {

            src: 'https://i.ibb.co/2q5kBC3/JMV-GLOBAL-SITE.png',
            title: 'JMV GLOBAL - Site institucional',
            txt: 'Site institucional da JMV GLOBAL, feito por meio da plataforma wordpress, foi uma reconstrução do site já existente, mudando o visual e as funcionalidades.'

        },
        {

            src: 'https://i.ibb.co/WPMcS6V/JK-MODAS-SITE.png',
            title: 'JK MODAS - Site de vendas',
            txt: 'Site para venda de produtos online, com a solicitação de compras pelo site e pagamento na entrega, com a entrega do projeto, o cliente recuperou o investimento em uma semana.'

        },
        {

            src: 'https://i.ibb.co/VmbWHjf/JMV-GLOBAL-SISTEMA-WEB.jpg',
            title: 'JMV GLOBAL - Sistema Web',
            txt: 'Sistema web para geração de documentos em PDF, este sistema permite que uma pessoa cadastre sua empresa e setores e gere um documento sobre riscos no local de trabalho.'

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
        animationData: compAnimation,
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

                        <h1>Computação</h1>

                    </div>

                    <div className="courseImage">

                        <Lottie
                            options={animationEletricConfig}
                        />

                    </div>

                </div>

            </section>

            <section id='courseServices' >

                <h1>Nossos serviços de Computação</h1>

                <div className='courseServicesDiv'>

                    <div className='boxServicesCourse' >

                        <h3>  Websites: </h3>

                        <p>Ter um site é essencial para que o seu negócio ganhe visibilidade e possa atingir um maior número de clientes.Ele funciona como uma vitrine para que o público conheça mais da sua empresa e serviços.Por isso, nós utilizamos as melhores tecnologias disponíveis para colocar a sua marca online de maneira atrativa, responsiva e moderna.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>E - Commerce:</h3>

                        <p>Já pensou em comercializar em qualquer hora e lugar ?
                        A loja virtual é uma ótima maneira de divulgar seus produtos ou serviços na internet e atingir mais clientes.Trabalhamos com grandes plataformas como Shopify e Xtech Commerce para disponibilizar a sua mercadoria online de maneira elegante e eficiente.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Aplicativos Móveis:</h3>

                        <p>Hoje, a principal forma de acesso à internet é através de dispositivos móveis.Você sabia que sua solução pode ser convertida a um simples toque ?
        Contratando o serviço, viabilizamos sua ideia construindo o aplicativo que você sempre sonhou.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Montagem de Computadores:</h3>

                        <p>Com o advento da tecnologia, o computador se tornou uma das principais ferramentas utilizadas pela humanidade. < br / >
                        Por isso, oferecemos o serviço de cotação de peças, além da montagem de micros para o seu empreendimento ou uso pessoal.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Consultoria / Outros Serviços:</h3>

                        <p>Além dos serviços listados a cima, também oferecemos consultoria e outros projetos e soluções na área de Engenharia de Computação.Para maiores informações, entre em < Link to = '/Contato' > contato </Link> conosco.</p>

                    </div>

                </div>

            </section>

            <section id="Gom3sCamisa10" >

                <div className='coursesSlideProjects' >

                    <h2>Nossos projetos de Computação</h2>

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
                                            <p>Este foi um serviço de: {item.serviceType} {item.duration ? `e teve duração de: ${item.duration}.` : '.' }</p>
                                        
                                        </div>

                                    )}

                                </div>

                            )

                        })

                    }

                    <img src={rightArrow} className='arrow-right' onClick={nextImage} />

                </div>

            </section>

            <Footer />

        </div>

    )

}