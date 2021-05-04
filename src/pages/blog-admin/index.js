import { React, useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './style.css';

import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
import firebaseConfig from '../../FIREBASECONFIG.js'

export default function InfoCourses() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const [formData, setFormData] = useState({

        title: '',
        desc: '',
        imageUrl: '',
        content: '',
        author: ''

    })

    function sendPost() {

        if(!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        const id = firebase.database().ref().child('posts').push().key

        firebase.database().ref('posts/' + id).set({
            title: formData.title,
            desc: formData.desc,
            imageUrl: formData.imageUrl,
            content: formData.content,
            author: formData.author
        }).then(()=>alert("Post enviado com sucesso"));
        
    }

    function handleInputChange(event) {

        const {name, value} = event.target
        setFormData({

            ...formData, [name]: value

        })
        
    }

    return (

        <div id='BlogAdmin'>

            <Header />

            <main id='mainBlogAdmin'>

                <form>

                    <fieldset>

                        <label htmlFor='title' >Titulo</label>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            onChange={handleInputChange}
                        />

                        <label htmlFor='desc'>Resumo</label>
                        <input
                            type='text'
                            name='desc'
                            id='desc'
                            onChange={handleInputChange}
                        />

                        <label htmlFor='imageUrl'>
                            Url da imagem</label>
                        <input
                            type='text'
                            name='imageUrl'
                            id='imageUrl'
                            onChange={handleInputChange}
                        />

                        <label htmlFor='imageUrl'>
                            Nome do autor</label>
                        <input
                            type='text'
                            name='author'
                            id='author'
                            onChange={handleInputChange}
                        />

                        <label htmlFor='content'>Conteúdo</label>
                        <textarea
                            type='text'
                            name='content'
                            id='content'
                            onChange={handleInputChange}
                        />

                        <a className='sendButtonBlog' onClick={sendPost} >Enviar</a>

                    </fieldset>

                </form>

            </main>
            
            <Footer />

        </div>

    )

}