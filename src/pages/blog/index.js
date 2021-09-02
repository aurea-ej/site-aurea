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
                setDataBlog(temp.reverse())
                // console.log(temp[0])
            }
            else
                setDataBlogExists(false)
        })

    }, []);

        return (

            <div id='Blog' >

                <Header />

                <main id='mainBlog'>

                    <h1>Bem vindos ao Blog Aureano 💛 </h1> <h3>v0.1 Beta</h3>

                    {dataBlog.map((item)=> (

                        <div className='postDiv' >

                            <h3>{item.title}</h3>
                            <h5>{item.desc}</h5>
                            <img src={item.imageUrl} />

                            <div className="paragraphPost">
                                {
                                    Array(item.paragraphs).map((item)=>(

                                        <div style={{width: "100%"}}>
                                            <p>{item}</p>
                                        </div>

                                    ))
                                }
                            </div>

                            {/* <p>{item.content}</p> */}
                            <div className='postAuthor' >
                                <span>Escrito por: {item.author}</span>
                            </div>

                        </div>

                    ))}

                </main>
                
                <Footer />

            </div>
        )
        
    
    }