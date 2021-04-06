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
        content: ''

    })

    function sendPost() {

        // firebase.initializeApp(firebaseConfig);
        // firebase.analytics();

        firebase.database().ref('posts/0').set({
            title: formData.title,
            desc: formData.desc,
            imageUrl: formData.imageUrl,
            content: formData.content
        });
        
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

                        <div className="inputboxes">

                            <div className="field-group1">

                                <div className="field">

                                    <label htmlFor='name' >Titulo</label>
                                    <input
                                        type='text'
                                        name='title'
                                        id='title'
                                        onChange={handleInputChange}
                                    />

                                </div>


                                <div className="field">

                                    <label htmlFor='phone'>Resumo</label>
                                    <input
                                        type='text'
                                        name='desc'
                                        id='desc'
                                        onChange={handleInputChange}
                                    />

                                </div>

                            </div>

                            <div className="field-group1">

                                <div className="field-full">

                                    <label htmlFor='contact'>
                                        Url da imagem</label>
                                    <input
                                        type='text'
                                        name='imageUrl'
                                        id='imageUrl'
                                        onChange={handleInputChange}
                                    />

                                </div>

                            </div>

                            <div className="field-group1">

                                <div className="field-full">
                                    
                                    <label htmlFor='subject'>Conteúdo</label>
                                    <input
                                        type='text'
                                        name='subject'
                                        id='subject'
                                        onChange={handleInputChange}
                                    />

                                </div>

                            </div>

                            <a className='sendButtonBlog' onClick={sendPost} >Enviar</a>

                        </div>

                    </fieldset>

                </form>

            </main>
            
            <Footer />

        </div>

    )

}