import { React, useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/database";
import firebaseConfig from '../../FIREBASECONFIG.js'

import aviaoAureaVertical from '../../imgs/aviaoAurea.png'

import './style.css';

export default function InfoCourses() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const [dataBlog, setDataBlog] = useState([{}])
    const [dataBlogExists, setDataBlogExists] = useState(false)

    useEffect(() => {

        if(!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        firebase.database().ref('posts').get('/posts')
        .then(function(snapshot) {

            if (snapshot.exists()){
                setDataBlogExists(true)
                var data = snapshot.val()
                var temp = Object.keys(data).map((key) => data[key])
                setDataBlog(temp)
            }
            else
                setDataBlogExists(false)
        })

    }, []);

    if (dataBlogExists) {

        return (

            <div id='Blog' >

                <Header />

                <main id='mainBlog'>

                    <h1>Bem vindos ao Blog Aureano 💛 </h1>

                    {dataBlog.map((item)=> (

                        <div className='postDiv' >

                            <h3>{item.title}</h3>
                            <h5>{item.desc}</h5>
                            <img src={item.imageUrl} />
                            <p>{item.content}</p>

                        </div>

                    ))}


                </main>
                
                <Footer />

            </div>
        )
        
    }else{
        
        return (

            <div id='Blog' style={{backgroundColor: "#000"}}>

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
                    <sectio>

                    </sectio>

                </main>
                
                <Footer />

            </div>

        )
    }

}