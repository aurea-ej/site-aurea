import { React, useEffect } from 'react'
import { useState } from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import { Link } from "react-router-dom"
import Lottie from 'react-lottie';

import leftArrow from '../../../imgs/leftArrow.png'
import rightArrow from '../../../imgs/rightArrow.png'
import autoAnimation from '../../../imgs/autoAnimation.json'

import '../style.css';

export default function InfoCourses(props) {

    const [current, setCurrent] = useState(0)
    const dataSlide = [

        {

            src: 'https://i.ibb.co/WcTG0sc/barril-cheio2.jpg',
            title: 'Barril Cheio',
            txt: 'O cliente queria modernizar seu negócio com uma chopeira automatizada. Para isso a Aurea trabalhou numa consultoria, fazendo uma pesquisa de mercado, listagem de equipamentos necessários, a diagramação do sistema, layout 3D e uma estimativa de preço da chopeira.'

        },
        {

            src: 'https://i.ibb.co/vsSTxGq/tr-pica2.jpg',
            title: 'Trópica',
            txt: 'O cliente queria revitalizar seu sistema de lavagem automática de barris. Para isso a Aurea reformulou o sistema de CLP que o cliente usava, de modo que a lavagem fosse completa e sem danificar a estrutura e alterar as propriedades da bebida.'

        }
    ]
    const nextImage = () => {

        setCurrent(current === dataSlide.length - 1 ? 0 : current + 1)

    }
    const prevImage = () => {

        setCurrent(current === 0 ? dataSlide.length - 1 : current - 1)

    }

    const animationAutoConfig = {
        loop: true,
        autoplay: true, 
        animationData: autoAnimation,
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

                        <h1>Automação</h1>

                    </div>

                    <div className="courseImage">

                        <Lottie
                            options={animationAutoConfig}
                            height={250}
                            width={400}
                        />

                    </div>

                </div>

            </section>

            <section id='courseServices' >

                <h1>Nossos serviços de automação</h1>

                <div className='courseServicesDiv'>

                    <div className='boxServicesCourse' >

                        <h3> Controle de Acesso e Fechaduras Eletrônicas: </h3>

                        <p>Se você busca praticidade, agilidade e segurança em sua residência ou negócio, esse serviço é para você.Poupe tempo e riscos através da automatização de acessos e fechaduras.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Automação de Ambientes:</h3>

                        <p>Já imaginou trancar as portas, abrir as cortinas, ligar a tv em seu canal favorito, colocar uma música para tocar e, ainda, ajustar a temperatura do ar condicionado com um único toque ? Tudo isso e mais um pouco é possível a partir da automatização do seu ambiente.A opção para quem preza por conforto e segurança.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Business Intelligence:</h3>

                        <p>O futuro é aqui.Para modernizar e dinamizar a análise de dados do seu negócio, oferecemos o serviço de BI.Gerar gráficos e planilhas inteligentes faz com que você conheça profundamente sua empresa e assim possa tomar as melhores decisões para o seu sucesso.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Automação Empresarial:</h3>

                        <p>Já imaginou como a tecnologia pode aumentar sua produtividade e agregar valor ao seu negócio ? Oferecemos soluções personalizadas de automatização de processos para minimizar o tempo de produção e os erros humanos em sua empresa.O futuro mais próximo do seu produto.</p>

                    </div>

                    <div className='boxServicesCourse' >

                        <h3>Consultoria e Prototipagem:</h3>

                        <p>Além dos serviços listados acima, também oferecemos consultoria, prototipagem e outros projetos e soluções na área de Engenharia de Controle e Automação.Para maiores informações, entre em <Link to='/Contato' >conosco</Link>.</p>

                    </div>

                </div>


            </section>

            <section id="Gom3sCamisa10" >

                <div className='coursesSlideProjects' >

                    <h2>Nossos projetos de Automação</h2>

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