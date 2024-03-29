import { React, useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './style.css';

import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from '../../FIREBASECONFIG.js'

import logoAurea from '../../imgs/logoAurea2.png'

export default function InfoCourses() {

    const [formData, setFormData] = useState({

        title: '',
        desc: '',
        imageUrl: '',
        content: '',
        author: ''

    })

    const [dataAdm, setDataAdm] = useState([{}])
    const [dataKeysAdm, setDataKeysAdm] = useState([])
    const [selectItemToDelete, setSelectItemToDelete] = useState('')
    const [paragraph, setParagraph] = useState([])
    const [paragraphs, setParagraphs] = useState([])
    const [paragraphsAmount, setParagraphsAmount] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [haveLogIn, setHaveLogIn] = useState(false)
    // const [needUpdatePage, setNeedUpdatePage] = useState(false)

    useEffect(() => {

        // window.scrollTo(0, 0);

    }, []);

    useEffect(() => {

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        var ref = firebase.database().ref("posts");

        ref.get('/posts').then(function (snapshot) {

            if (snapshot.exists()) {
                var data = snapshot.val()
                var temp = Object.keys(data).map((key) => data[key])
                setDataAdm(temp)
            }

        })

    }, []);

    useEffect(() => {

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        var ref = firebase.database().ref("posts");

        var keys = []

        ref.orderByKey().on("child_added", function (snapshot) {
            keys.push(snapshot.key);
        });

        setDataKeysAdm(keys)

    }, []);


    function sendPost() {

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        const id = firebase.database().ref().child('posts').push().key

        firebase.database().ref('posts/' + id).set({
            title: formData.title,
            desc: formData.desc,
            imageUrl: formData.imageUrl,
            content: formData.content,
            author: formData.author,
            paragraphs: paragraphs
        }).then(() => alert("Post enviado com sucesso"));

    }

    function handleInputChange(event) {

        const { name, value } = event.target
        setFormData({

            ...formData, [name]: value

        })

    }

    function handleSelectItemToDelete(event) {

        setSelectItemToDelete(event.target.value)

    }

    function deletePost() {

        firebase.database().ref('posts/' + dataKeysAdm[selectItemToDelete]).remove()
            .then(function (snapshot) {

                alert("Post excluido")

            })

    }

    function SignIn() {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                setHaveLogIn(true)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    if (haveLogIn) {
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
                                spellCheck
                                onChange={(event) => { setParagraphs(event.target.value) }}
                            />

                            <a className='sendButtonBlog' onClick={sendPost} >Enviar</a>

                        </fieldset>

                    </form>

                    <section className="defaultSectionAdmin">

                        <h2>Apagar artigo</h2>

                        <select onChange={handleSelectItemToDelete} >

                            <option>Selecione o item</option>

                            {dataAdm.map((item, index) => {

                                return (

                                    <option key={index} value={index} >{item.title}</option>

                                )

                            })}

                        </select>

                        <a className='sendButtonBlog' onClick={deletePost} >Apagar</a>

                    </section>

                </main>

                <Footer />

            </div>

        )
    }
    else {

        return (

            <div id="BlogLogin">

                <div className="loginForms">

                    <img src={logoAurea} alt="" />

                    <input placeholder='E-mail' onChange={(txt) => setEmail(txt.target.value)} />
                    <input placeholder='Senha' onChange={(txt) => setPassword(txt.target.value)} />

                    <a onClick={SignIn} >Entrar</a>

                </div>

            </div>
        )
    }

}