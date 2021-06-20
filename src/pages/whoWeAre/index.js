import React, {useState, useRef} from 'react'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import TitleWithAirplane from '../../components/titleWithAirplane'

import whoWeAre from '../../imgs/ColagemAureanos2.png'
import imgMission from '../../imgs/mission.jpg'
import imgvalues from '../../imgs/values.jpg'
import imgEyesight from '../../imgs/eyesight.jpg'

import './style.css'

const WhoWeAre = () => {

    const textBoxCardValues = useRef()
    const textBoxCardMission = useRef()
    const textBoxCardEyesight = useRef()
    const [atualCard, setAtualCard] = useState(0)

    function mouseEnterCard(e) {

        let x = ( ( window.innerWidth  - e.pageX ) / 38 )
        let y = ( ( window.innerHeight - e.pageY ) / 25 )

        if (atualCard == 1)
            textBoxCardMission.current.style.transform = `translateZ(35px) rotateX(${x/2}deg) rotateY(${-y}deg)`
        else if (atualCard == 2) 
            textBoxCardEyesight.current.style.transform = `translateZ(35px) rotateX(${x/2}deg) rotateY(${y}deg)`
        else 
            textBoxCardValues.current.style.transform = `translateZ(35px) rotateX(${x*1.25}deg) rotateY(${y}deg)`
        
    }

    function mouseLeaveCard() {

        textBoxCardValues.current.style.transform = `translateZ(0px)`
        textBoxCardMission.current.style.transform = `translateZ(0px)`
        textBoxCardEyesight.current.style.transform = `translateZ(0px)`

    }
    
    return (

        <div className="App">

            <Header />

            <TitleWithAirplane text='Prazer, Aurea' />

            <main>

                <div>

                    <img src={whoWeAre} alt="quem somos nós" className="imgWhoWeAre" />
                    
                </div>

                <div className="initialText" >

                    <p>Fundada no dia 9 de Agosto de 2016, a Aurea Soluções e Projetos deu os seus primeiros passos como uma Empresa Júnior no Instituto Federal Fluminense como uma empresa multidiciplinar que presta serviços nas áreas de <a>Engenharia de Computação</a>, <a>Elétrica</a>, <a>Controle e Automação</a> e também serviços de <a>Arquitetura e Urbanismo</a> </p>  
                    
                    <p>No ano de 2018 a Aurea passou pelo processo de federação, que de fato a introduziu ao MEJ (Movimento Empresa Júnior) como uma Empresa Júnior. E com muito esforço e trabalho duro recebemos nos anos de 2019 e 2020 diversas premiações de visibilidade estadual, fazendo com que a Aurea fosse reconhecida como uma empresa "Bi Impacto", ou seja, uma Empresa Júnior capaz de bater todas as suas metas anuais em dois anos consecutivos. Dessa forma, em um cenário de maturidade ainda mais expressivo, atualmente, em 2021, a Aurea está atrás de sua próxima conquista em rede: Alcançar o "Tri Impacto", batendo todas as metas anuais por três anos consecutivos. </p>

                </div>

            </main>

            <section id='sectionWhoWeAre' >

                <div className="missionValuesEyesight" >

                    <div className="mission box" onMouseMove={mouseEnterCard} onMouseLeave={mouseLeaveCard} onMouseEnter={()=>{setAtualCard(1)}} >

                        <h3>Missão</h3>

                        <a> <img src={imgMission} alt="nossa missão" /> </a>

                        <div className="textBox" ref={textBoxCardMission} >

                            <p>A missão da Aurea é <b>formar empreendedores de impacto</b> através do jeito Aureano de ser.</p>
                        </div>

                    </div>

                    <div className="eyesight box" onMouseMove={mouseEnterCard} onMouseLeave={mouseLeaveCard} onMouseEnter={()=>{setAtualCard(2)}} >

                        <h3  >Visão</h3>

                        <a> <img src={imgEyesight} alt="nossa vião" /> </a>

                        <div className="textBox" ref={textBoxCardEyesight} >

                            <p>A visão da Aurea até 2023 é <b>ser referência</b> em projetos de excelência que contribuam para <b>formação de líderes atuantes e conectados</b> no MEJ Fluminense.</p>

                        </div>

                    </div>

                    <div className="values box" onMouseMove={mouseEnterCard} onMouseLeave={mouseLeaveCard} onMouseEnter={()=>{setAtualCard(3)}} >

                        <h3>Valores</h3>

                        <a> <img src={imgvalues} alt="nossos valores" /> </a>

                        <div className="textBox" ref={textBoxCardValues} >

                            <div className="tableAurea" >

                            <tr><td><b>A</b>paixonado</td></tr>
                            <tr><td><b>U</b>nido</td></tr>
                            <tr><td><b>R</b>esponsável</td></tr>
                            <tr><td><b>E</b>mpático</td></tr>
                            <tr><td><b>A</b>udacioso</td></tr>
                            <tr><td><b>N</b>otável</td></tr>
                            <tr><td><b>O</b>bstinado</td></tr>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id='sectionReports' >

                <div className='ourReports' >

                    <h2>Relatos dos nossos pós juniores</h2>

                    <div className='rowOurReports' >

                        <h3>Heitor</h3>

                        <figure>

                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_antes-e-depois-pr%C3%A9-e-p%C3%B3s-separado-por-activity-6690008491198885888-qBzV' >
                                <img src='https://media-exp1.licdn.com/dms/image/C4E22AQF-bGYccDk5FA/feedshare-shrink_800/0/1595022317182?e=1617840000&v=beta&t=7ZoNeuWWicLsG1rptb6YiQYWjK__1Z09mcKVwmQFKPY' />
                            </a>

                            <figcaption className='marginLeftTextRepors' >
                                Antes e depois. Pré e pós. Separado por um marco, assim é minha trajetória devido a Aurea.

                                As vezes me pego olhando para novembro de 2018 quando entrei na empresa e o quanto aprendi de lá para cá é imensurável.

                                O Heitor que entra no MEJ acreditava que sabia o que era liderança, problemas, responsabilidade, aprendizado... Todas essas palavras foram ressignificadas durante esse pouco mais de 1 ano e meio.

                                A alegria do primeiro projeto da área de engenharia elétrica, os desafios a cada nova negociação, cada meta batida, cada recorde que em sequência, quase como um furacão, íamos rompendo um por um para escrever conquistas ainda maiores na história da Aurea.

                                Existem diversos pontos de inflexão na minha jornada, desde momento em família como o EFEJ 19, até momentos em que errei enquanto liderança e aprendi que grande parte de ser líder é servir... Olhar para todas as experiências no MEJ é olhar para aprendizados em boas conversas, algo que aprendi a amar tanto quanto o futebol do final de semana.

                                Tenho o que acredito ser mais quase 6 meses de trajetória por aqui e espero que cada momento seja como essa foto, com responsabilidade e leveza, o sorriso que tanto aprendi a manter durante o percurso para que sempre traga alegria na chegada e deixe saudade na partida.
                            </figcaption>
                            
                        </figure>

                    </div>

                    <div className='rowOurReports inverts' >

                        <h3>Maria Clara</h3>

                        <figure >

                            <figcaption className='marginRightTextRepors' >
                            Quando encontrei a Aurea no início da faculdade ela ainda passava por seu processo de configuração e federação, enquanto eu estava buscando por experiências além das salas de aula. Hoje, 2 anos depois, afirmo que é nítido o crescimento que a empresa vem tendo, e o quanto acrescenta aos voluntários que passam por ali.

                            Na Aurea desenvolvi habilidades que dificilmente conseguiria em outro lugar, e o que mais me encantou foi enxergar a empresa como um espaço multidisciplinar de trocas potentes, onde estudantes de diferentes cursos e perfis se juntam por um propósito, buscando aprimoramento de processos, soluções de desafios na prática e aprendizagem conjunta.

                            Nas experiências de liderança e gerenciamento, pude reconhecer meus pontos fortes a serem valorizados e os fracos que merecem maior cuidado, o que direciona meu desenvolvimento em prol de ser uma melhor profissional ao oferecer soluções mais completas. Conheci metodologias ágeis que aprimoram processos, profissionais referência, e vivi de perto o gerenciamento de uma empresa antes mesmo de abrir um escritório.

                            Toda minha gratidão aos amigos que fiz nesse caminho, que tanto me ensinaram e provaram o quanto podemos ir longe quando se tem uma equipe alinhada, que escuta, sonha e acredita junto.
                            </figcaption>

                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_p%C3%B3s-j%C3%BAnior-maria-clara-moura-quando-encontrei-activity-6692115629366927360-xTl7'>
                                <img src='https://media-exp1.licdn.com/dms/image/C4E22AQEAAzvfxq64rg/feedshare-shrink_2048_1536/0/1595524696042?e=1617840000&v=beta&t=KxC7zVF_Pcb3X3N5LJ_HM0G-QQ1kInWgEp20n9oESb4' />
                            </a>

                        </figure>

                        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6690008490032840707" height="1225" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe> */}

                    </div>

                    <div className='rowOurReports' >

                        <h3>Victor</h3>

                        <figure>

                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_%C3%A9-bem-claro-conseguir-diferenciar-o-victor-activity-6695050016597323776-GVWa' >
                                <img src='https://media-exp1.licdn.com/dms/image/C4E22AQHMkr4BRqYkRQ/feedshare-shrink_800/0/1596224311062?e=1617840000&v=beta&t=MT15ZsQUxfJmudL1tsBZmXQtU23pJNTzPmxmIzAmn0w' />
                            </a>

                            <figcaption className='marginLeftTextRepors' >
                            É bem claro conseguir diferenciar o Victor antes e depois do MEJ/Aurea. O Victor de antes, era tão focado na parte técnica que acaba esquecendo algumas habilidades requisitadas no mercado. O MEJ me ajudou muito nesse quesito! Aprendi muito sobre soft skill's, essas "habilidades extras" que não aprendemos durante a faculdade, mas que fazem uma diferença absurda para o mercado.

                            Em apenas 6 meses de MEJ consigo ver claramente minha evolução. Logo que entrei escolhi, na Aurea, a Diretoria de Projetos como primeira opção e, para minha surpresa, me tornei Gerente de Projetos de computação. A experiência foi (e é) incrível! Lidar com clientes de outras empresas/serviços/negócios é algo espetacular! Tirei de lição um pouquinho do que aprendi com cada um deles,! Aprendi a realizar o contado da melhor forma, saber conversar bem sobre projetos, liderar equipes, cobrar e também ser cobrado, da maneira correta!

                            Usei tudo isso de motivação para promover um projeto maior pessoal, a EYER TECH. Todo o aprendizado que consegui no MEJ está sendo muito bem utilizado nessa nova trajetória da minha vida. Aprendi com a Aurea como é bom realizar um sonho de um cliente e, mais que isso, que o sonho de um cliente também se torna o meu sonho!
                            </figcaption>
                            
                        </figure>

                    </div>

                    <div className='rowOurReports inverts' >

                        <h3>Bárbara</h3>

                        <figure>

                            <figcaption className='marginRightTextRepors' >
                            Meu nome é Bárbara, trabalhei na Diretoria Comercial por aproximadamente 1 ano.
                            Durante o tempo em que participei da Aurea, me deparei com experiências de trabalho totalmente novas, com pessoas incríveis e com oportunidades de aprender de diversas maneiras, isso me agregou de inúmeras formas.
                            A empresa tem um futuro incrível pela frente, evoluindo cada vez mais, por que acredita e apoia cada um dos seus membros, e todos eles acreditam nela. Hoje me encontro no oitavo período de Arquitetura e Urbanismo e faço estágio em um escritório.
                            São realidades bem diferentes e fico muito grata por ter feito parte de cada uma delas!
                            </figcaption>
                            
                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_meu-nome-%C3%A9-b%C3%A1rbara-trabalhei-na-diretoria-activity-6706697845317148672-7kmY' >
                                <img src='https://i.ibb.co/TbNNdWZ/Barbara-2.jpg' />
                            </a>

                        </figure>

                    </div>

                    <div className='rowOurReports' >

                        <h3>João Victor</h3>

                        <figure>

                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_um-dia-enquanto-estava-entrando-iff-fui-activity-6697625751094743040-ynzY' >
                                <img src='https://media-exp1.licdn.com/dms/image/C5622AQHT7xzO0N0EgA/feedshare-shrink_2048_1536/0/1596838413330?e=1617840000&v=beta&t=HAzX_C_AHY1GnpLpb9bwVhwv18gCBalJ7QvVyor51Zs' />
                            </a>


                            <figcaption className='marginLeftTextRepors' >
                            Um dia enquanto estava entrando IFF fui parado por Heitor que comentou que o IFF tinha uma empresa Júnior chamada Aurea, não tinha menor ideia do que se tratava, mas ele deu uma resumida e pesquisei mais a fundo sobre a Aurea. No primeiro momento gostei porque poderia ser algo além da faculdade, e que seria algo bom para meu currículo.

                            Sempre fui uma pessoa tímida, que tinha dificuldades de falar em público, fiz as etapas do processo seletivo e chegou a vez da entrevista, a primeira entrevista da minha vida, mas superou minhas expectativas, Marcos me trouxe uma calma que consegui falar sem me embolar tanto. Não estava muito esperançoso, mas chegou o email dizendo que passei e assim fui seguindo.

                            Com o passar do tempo conhecendo o MEJ e a Aurea pude ver que aquilo não era apenas algo animador e agregador para o currículo, era algo muito além, que impactava na vida em vários sentidos, quando se abraça o movimento você entra num mundo novo, a Aurea se tornou uma família, sou uma pessoa diferente da que entrou, mudei no âmbito pessoal e profissional, evolui e continuo evoluindo em muitos sentidos, me tornei parte de algo grande e que nem imaginava existir. Só tenho coisas boas para dizer sobre isso tudo. Eu não seria eu se não estivesse na Aurea.
                            </figcaption>
                            
                        </figure>

                    </div>

                    <div className='rowOurReports inverts' >

                        <h3>Ana Carolina</h3>

                        <figure>

                            <figcaption className='marginRightTextRepors' >
                            É imensurável o que eu vivo desde que entrei na Aurea.
                            Eu nunca fui uma aluna exemplar na faculdade e isso me trazia muitas inseguranças! Sempre repeti que queria entrar numa empresa, obedecer ordens e ficar lá pra sempre, com o máximo de estabilidade possível... risos.
                            Mal sabia eu como isso mudaria em 180°!
                            Empreendedorismo sempre me trouxe medo, porque era o contrário do que eu achei que merecia e alcançaria.
                            Até que uma amiga minha entrou em uma empresa júnior em outra faculdade e despertou minha curiosidade. Algum tempo depois, a Aurea foi fundada e eu fiz o primeiro processo seletivo.
                            Não passei! E ainda bem! O momento que eu entrei foi o momento certo pro crescimento que eu precisava.
                            Além de encarar a diretoria do Comercial na Aurea, me aventurei em outro cargo no MEJ, no Núcleo de Empresas Juniores do Norte Fluminense.
                            No começo da pandemia, logo depois de sentarmos e pararmos os processos internos a fim de adaptá-los, fui convidada pela Evolution e pela Inova Consultoria para falar sobre Vendas e Spin Selling e foram 2 momentos muito marcantes, onde eu pude devolver para a rede um pouco de tudo que ela me ensinou e me ensina, seja no dia a dia ou nos imersivos e intensos eventos MEJ!
                            </figcaption>

                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_depoimento-da-ana-carolina-assessora-do-activity-6704472284381425665-E5jz' >
                                <img src='https://media-exp1.licdn.com/dms/image/C4E22AQH2NUUgWJyUHQ/feedshare-shrink_2048_1536/0/1598470753461?e=1617840000&v=beta&t=MsZmox2Jz2NvKASYdzx7DQ4G1f1-2MnCPcHQGIeCVAU' />
                            </a>
                            
                        </figure>

                    </div>

                    <div className='rowOurReports' >

                        <h3>Paula</h3>

                        <figure>

                            <a target='_blank' href='https://www.linkedin.com/posts/aureaej_meu-nome-%C3%A9-paula-jordy-e-tive-o-prazer-de-activity-6711735216467267584-aUNy' >
                                <img src='https://media-exp1.licdn.com/dms/image/C5622AQFWOAnf8Sn3MA/feedshare-shrink_800/0/1600202372910?e=1617840000&v=beta&t=5U9WRJ2acz3uQ6qhyh-SE7lLoQgrk18C57ns9oknORg' />
                            </a>

                            <figcaption className='marginLeftTextRepors' >
                            Meu nome é Paula Jordy e tive o prazer de participar do início do sonho Aurea.
                            Entramos nessa jornada com sede de aprender e desbravar. O movimento MEJ te faz pertencer e isso que alavancou nossa motivação.
                            Como já muito bem colocado pelo Paulo Freire: “Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção”.
                            Olhar a Aurea agora e ver a continuidade e os frutos desse trabalho desperta um imenso orgulho!
                            Hoje trabalho na iniciativa privada e levo essências fundamentais de trabalho em equipe e “ser dono” que vem muito das experiências adquiridas na Aurea.
                            Se você que está lendo esse post entender que pode contribuir e evoluir junto, venha para o movimento!
                            </figcaption>
                            
                        </figure>

                    </div>
                    
                    <div className='rowOurReports' >

                        <h3>Rodolfo</h3>

                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6722935532776673281?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    )

}

export default WhoWeAre