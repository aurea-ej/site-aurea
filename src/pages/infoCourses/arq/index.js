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
            txt: 'O âmbito conceitual do projeto foi pautado na própria cultura organizacional da Aurea, algo feito propositalmente em prol de atingir um nível satisfatório de pertencimento, algo que além de criar um ambiente que condiz com os princípios da empresa, a fortalece.    A fim de viabilizar os conceitos propostos, as soluções práticas basearam-se em construir um layout móvel e híbrido a fim de criar infinitas possibilidades que serão descobertas de acordo com as demandas. Além de expor a história da empresa nas paredes, tal como criar espaço para os prêmios. Tudo isso com o objetivo de criar um ambiente despojado e acolhedor ao proporcionar a infraestrutura necessária para o bem estar do membro.',
            serviceType: 'projeto de interiores comercial'

        },
        {

            src: 'https://i.ibb.co/419T57R/6-effects-Result.png',
            title: 'Juliana e José',
            txt: 'Localizada em Campos dos Goytacazes, a Casa J constitui um projeto com área equivalente a 286,79 m². A residência foi projetada com base nos conceitos de funcionalidade e modernidade para atender aos desejos da família composta por quatro membros. O grande desafio foi adaptar o programa de necessidades à estrutura existente.    Na fachada principal, foram usados tons neutros, como o cinza e o branco, trazendo um ar de contemporaneidade e sofisticação, e o revestimento amadeirado, garantindo elegância na medida certa. A jardineira na varanda trouxe um charme a mais na composição!    O projeto de Arquitetura também contempla a reforma da área de lazer da residência. Trabalhando o conceito de integração, é possível notar que o espaço foi projetado para atender as necessidades da família por um ambiente aconchegante e amplo de socialização. O objetivo foi criar uma atmosfera atraente e relaxante para descanso e também para festas e encontros.    Foi projetada uma varanda Gourmet com uma área para churrasqueira, que recebe o apoio de uma cozinha instalada ao lado de fora da casa, ela pode servir como auxílio para a cozinha interna e também cria uma versatilidade de usos.Para compor o ambiente e torná-lo cada vez mais agradável, foi instalado um pergolado com trepadeiras. Ele funciona como um quebra sol, a combinação dos elementos ajuda a reduzir a temperatura do interior do ambiente, deixando o clima mais aconchegante.',
            duration: '03/07/2020 - 25/09/2020',
            serviceType: 'projeto de Reforma Residencial'

        },
        {

            src: 'https://i.ibb.co/rGPN6qY/2-effects-Result.png',
            title: 'Juliana e José',
            txt: 'Localizada em Campos dos Goytacazes, a Casa J constitui um projeto com área equivalente a 286,79 m². A residência foi projetada com base nos conceitos de funcionalidade e modernidade para atender aos desejos da família composta por quatro membros. O grande desafio foi adaptar o programa de necessidades à estrutura existente.    Na fachada principal, foram usados tons neutros, como o cinza e o branco, trazendo um ar de contemporaneidade e sofisticação, e o revestimento amadeirado, garantindo elegância na medida certa. A jardineira na varanda trouxe um charme a mais na composição!    O projeto de Arquitetura também contempla a reforma da área de lazer da residência. Trabalhando o conceito de integração, é possível notar que o espaço foi projetado para atender as necessidades da família por um ambiente aconchegante e amplo de socialização. O objetivo foi criar uma atmosfera atraente e relaxante para descanso e também para festas e encontros.    Foi projetada uma varanda Gourmet com uma área para churrasqueira, que recebe o apoio de uma cozinha instalada ao lado de fora da casa, ela pode servir como auxílio para a cozinha interna e também cria uma versatilidade de usos.Para compor o ambiente e torná-lo cada vez mais agradável, foi instalado um pergolado com trepadeiras. Ele funciona como um quebra sol, a combinação dos elementos ajuda a reduzir a temperatura do interior do ambiente, deixando o clima mais aconchegante.',
            duration: '03/07/2020 - 25/09/2020',
            serviceType: 'projeto de Reforma Residencial'

        },
        {

            src: 'https://i.ibb.co/k2Vc3sv/1-effects-Result.png',
            title: 'Juliana e José',
            txt: 'Localizada em Campos dos Goytacazes, a Casa J constitui um projeto com área equivalente a 286,79 m². A residência foi projetada com base nos conceitos de funcionalidade e modernidade para atender aos desejos da família composta por quatro membros. O grande desafio foi adaptar o programa de necessidades à estrutura existente.    Na fachada principal, foram usados tons neutros, como o cinza e o branco, trazendo um ar de contemporaneidade e sofisticação, e o revestimento amadeirado, garantindo elegância na medida certa. A jardineira na varanda trouxe um charme a mais na composição!    O projeto de Arquitetura também contempla a reforma da área de lazer da residência. Trabalhando o conceito de integração, é possível notar que o espaço foi projetado para atender as necessidades da família por um ambiente aconchegante e amplo de socialização. O objetivo foi criar uma atmosfera atraente e relaxante para descanso e também para festas e encontros.    Foi projetada uma varanda Gourmet com uma área para churrasqueira, que recebe o apoio de uma cozinha instalada ao lado de fora da casa, ela pode servir como auxílio para a cozinha interna e também cria uma versatilidade de usos.Para compor o ambiente e torná-lo cada vez mais agradável, foi instalado um pergolado com trepadeiras. Ele funciona como um quebra sol, a combinação dos elementos ajuda a reduzir a temperatura do interior do ambiente, deixando o clima mais aconchegante.',
            duration: '03/07/2020 - 25/09/2020',
            serviceType: 'projeto de Reforma Residencial'

        },
        {

            src: 'https://i.ibb.co/PrYp3Ty/imagem-renderizada-1.png',
            title: 'Joaquim',
            txt: 'O projeto de interiores em questão foi realizado para uma cozinha. Esse ambiente não apresentava uma funcionalidade adequada e um modelo precário, no qual o cliente não se identificava no espaço,  além do layout ser pequeno. Para solucionar tal inadequação, foi pensado um mobiliário planejado, com armários suspensos e abaixo das bancadas, a substituição de alguns eletrodomésticos, como a mudança de um fogão por um cooktop - forma essa encontrada para desocupar o espaço inferior, que seria utilizado para os armários - e também houve a implementação de uma coifa na cozinha, com o intuito de minimizar os resíduos durante o preparo de alimentos, tais como fumaça e gordura, assim, oferecendo um conforto maior nesse ambiente.',
            duration: '22/06/2020 - 17/07/2020',
            serviceType: 'projeto de Reforma residencial - cozinha'

        },
        {

            src: 'https://i.ibb.co/FmHWR35/vista-02.jpg',
            title: 'Joaquim',
            txt: 'O projeto de interiores em questão foi realizado para uma cozinha. Esse ambiente não apresentava uma funcionalidade adequada e um modelo precário, no qual o cliente não se identificava no espaço,  além do layout ser pequeno. Para solucionar tal inadequação, foi pensado um mobiliário planejado, com armários suspensos e abaixo das bancadas, a substituição de alguns eletrodomésticos, como a mudança de um fogão por um cooktop - forma essa encontrada para desocupar o espaço inferior, que seria utilizado para os armários - e também houve a implementação de uma coifa na cozinha, com o intuito de minimizar os resíduos durante o preparo de alimentos, tais como fumaça e gordura, assim, oferecendo um conforto maior nesse ambiente.',
            duration: '22/06/2020 - 17/07/2020',
            serviceType: 'projeto de Reforma residencial - cozinha'

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

                        <p>Além dos serviços listados acima, também oferecemos consultoria e outros projetos e soluções na área de Arquitetura e Urbanismo.
                        Para maiores informações, entre em  <Link to='/Contato' >contato</Link> conosco.</p>
                    </div>

                </div>


            </section>

            <section id="Gom3sCamisa10" >

                <div className='coursesSlideProjects' >

                    <h2>Nossos projetos de Arquitetura</h2>

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