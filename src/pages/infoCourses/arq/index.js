import { React, useEffect } from 'react'
import { useState } from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import { Link } from "react-router-dom"
import Lottie from 'react-lottie';

import leftArrow from '../../../imgs/leftArrow.png'
import rightArrow from '../../../imgs/rightArrow.png'

import arqAnimation from '../../../imgs/arqAnimation.json'

import '../style.css';

export default function InfoCourses(props) {

    const [current, setCurrent] = useState(0)
    const dataSlide = [

        {

            src: 'https://i.ibb.co/K7f3MkR/clinica3.jpg',
            title: 'Clínica Belo Corpo (Sala de Espera) ',
            txt: 'Tendo em vista a necessidade de um espaço mais confortável, atrativo e funcional, o projeto de reforma da clínica de estética belo corpo foi todo pensado em prol disso. Gerar um ambiente renovado sem a necessidade de se desfazer totalmente do antigo.    No projeto temos uma clínica com tons neutros e espaços otimizados. Além disso, priorizamos a ideia de soluções rápidas e eficientes que não gerassem tanta mão de obra.',
            serviceType: 'projeto de reforma de interiores',
            duration: '27/05/2019 - 29/07/2019'

        },
        {

            src: 'https://i.ibb.co/FD6JCbF/cli-nica.jpg',
            title: 'Clínica Belo Corpo (Sala de Atendimento)',
            txt: 'Tendo em vista a necessidade de um espaço mais confortável, atrativo e funcional, o projeto de reforma da clínica de estética belo corpo foi todo pensado em prol disso. Gerar um ambiente renovado sem a necessidade de se desfazer totalmente do antigo.    No projeto temos uma clínica com tons neutros e espaços otimizados. Além disso, priorizamos a ideia de soluções rápidas e eficientes que não gerassem tanta mão de obra.',
            serviceType: 'projeto de reforma de interiores',
            duration: '27/05/2019 - 29/07/2019'

        },
        {

            src: 'https://i.ibb.co/KW3t0XJ/clinica2.jpg',
            title: 'Clínica Belo Corpo (Recepção)',
            txt: 'Tendo em vista a necessidade de um espaço mais confortável, atrativo e funcional, o projeto de reforma da clínica de estética belo corpo foi todo pensado em prol disso. Gerar um ambiente renovado sem a necessidade de se desfazer totalmente do antigo.    No projeto temos uma clínica com tons neutros e espaços otimizados. Além disso, priorizamos a ideia de soluções rápidas e eficientes que não gerassem tanta mão de obra.',
            serviceType: 'projeto de reforma de interiores',
            duration: '27/05/2019 - 29/07/2019'

        },
        {

            src: 'https://i.ibb.co/vxtW2sK/Co-pia-de-03.png',
            title: 'Lava-jato Driver Club (Interior)',
            txt: 'O Driver Club foi desenvolvido a partir da ideia de estabelecer uma empresa de tecnologia, com um serviço de alto padrão, rápido e custo acessível. O proprietário tinha o sonho de empreender e causar impacto em um mercado inexplorado.   Para materializarmos tudo isso foi executado um projeto com estrutura metálica e concreto polido. No interior da franquia temos materiais que se comunicam com o externo, causando assim uma harmonia.',
            serviceType: 'projeto arquitetônico, projeto de interiores e memorial ilustrativo de acabamento',
            duration: '11/05/2020 - 18/12/2020'

        },
        {

            src: 'https://i.ibb.co/TwfQ8wh/Co-pia-de-vista-lateral-direita.png',
            title: 'Lava-jato Driver Club (Vista Lateral)',
            txt: 'O Driver Club foi desenvolvido a partir da ideia de estabelecer uma empresa de tecnologia, com um serviço de alto padrão, rápido e custo acessível. O proprietário tinha o sonho de empreender e causar impacto em um mercado inexplorado.   Para materializarmos tudo isso foi executado um projeto com estrutura metálica e concreto polido. No interior da franquia temos materiais que se comunicam com o externo, causando assim uma harmonia.',
            serviceType: 'projeto arquitetônico, projeto de interiores e memorial ilustrativo de acabamento',
            duration: '11/05/2020 - 18/12/2020'

        },
        {

            src: 'https://i.ibb.co/ry7cn1g/Co-pia-de-vista-frontal.png',
            title: 'Lava-jato Driver Club (Vista Frontal)',
            txt: 'O Driver Club foi desenvolvido a partir da ideia de estabelecer uma empresa de tecnologia, com um serviço de alto padrão, rápido e custo acessível. O proprietário tinha o sonho de empreender e causar impacto em um mercado inexplorado.   Para materializarmos tudo isso foi executado um projeto com estrutura metálica e concreto polido. No interior da franquia temos materiais que se comunicam com o externo, causando assim uma harmonia.',
            serviceType: 'projeto arquitetônico, projeto de interiores e memorial ilustrativo de acabamento',
            duration: '11/05/2020 - 18/12/2020'

        },
        {

            src: 'https://i.ibb.co/sKfjCRP/Co-pia-de-2020-10-ARQ-RE-DANIEL-EP-V01-OP01.jpg',
            title: 'Daniel e Bárbara',
            txt: 'Daniel e Bárbara chegaram com o desejo de ter uma residência que transmitisse a identidade deles, um casal apaixonado pelo simples, que valoriza a vegetação e fissurado por café.    No projeto tentamos traduzir tudo isso através de um estilo arquitetônico mais rústico, rodeado de vegetação.    O Daniel é um cliente fidelizado da Aurea,  ele fez conosco também o projeto do laboratório de engenharia pedagógica.',
            serviceType: 'projeto de reforma de arquitetura residencial',
            duration: '18/08/2020 - 29/11/2020'

        },
        {

            src: 'https://i.ibb.co/F4jzB3V/Co-pia-de-2-RENDER-FINAL-PO-S-PRODUC-A-O.png',
            title: 'Aurea',
            txt: 'O âmbito conceitual do projeto foi pautado na própria cultura organizacional da Aurea, algo feito propositalmente em prol de atingir um nível satisfatório de pertencimento, algo que além de criar um ambiente que condiz com os princípios da empresa, a fortalece.    A fim de viabilizar os conceitos propostos, as soluções práticas basearam-se em construir um layout móvel e híbrido a fim de criar infinitas possibilidades que serão descobertas de acordo com as demandas. Além de expor a história da empresa nas paredes, tal como criar espaço para os prêmios. Tudo isso com o objetivo de criar um ambiente despojado e acolhedor ao proporcionar a infraestrutura necessária para o bem estar do membro',
            serviceType: 'projeto de interiores comercial'

        },
        {

            src: 'https://i.ibb.co/j8x9vvw/Co-pia-de-4-RENDER-FINAL.png',
            title: 'Aurea',
            txt: 'O âmbito conceitual do projeto foi pautado na própria cultura organizacional da Aurea, algo feito propositalmente em prol de atingir um nível satisfatório de pertencimento, algo que além de criar um ambiente que condiz com os princípios da empresa, a fortalece.    A fim de viabilizar os conceitos propostos, as soluções práticas basearam-se em construir um layout móvel e híbrido a fim de criar infinitas possibilidades que serão descobertas de acordo com as demandas. Além de expor a história da empresa nas paredes, tal como criar espaço para os prêmios. Tudo isso com o objetivo de criar um ambiente despojado e acolhedor ao proporcionar a infraestrutura necessária para o bem estar do membro',
            serviceType: 'projeto de interiores comercial'

        }
    ]
    const nextImage = () => {

        setCurrent( current === dataSlide.length - 1 ? 0 : current + 1 )
        
    }
    const prevImage = () => {

        setCurrent( current === 0 ? dataSlide.length - 1 : current - 1 )

    }

    const animationArqConfig = {
        loop: true,
        autoplay: true, 
        animationData: arqAnimation,
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

                        <h1>Arquitetura</h1>

                    </div>

                    <div className="courseImage">

                        <Lottie 
                            options={animationArqConfig}
                            height={300}
                            width={400}
                        />

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
                        Para maiores informações, entre em  <Link to='/Contato' >contato</Link> conosco.</p>
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