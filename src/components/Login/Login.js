import './Login.css'

import React, { useContext, useState } from 'react'
import logo2 from './logo2.png';
import { useHistory, useLocation } from 'react-router';
import { initializeLoginFramework, signInWithEmailAndPasswordByCustom } from './loginManager';
import { UserContext } from '../../App';

initializeLoginFramework()
export default function Login() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState(false)
    const history = useHistory();
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        complect: ''
    });


    const handleBlur = (event) => {
        // console.log(event.target.name, event.target.value)
        let isFildValid = true;
        if (event.target.name === 'email') {
            isFildValid = /\S+@\S+\.\S+/.test(event.target.value)

        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6
            const isPasswordContainNumber = /\d{1}/.test(event.target.value)
            isFildValid = isPasswordValid && isPasswordContainNumber;
            user.password = event.target.value
        }
        if (isFildValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        // if (user.name && user.password) {
        //     createUserWithEmailAndPasswordByCustom(user.name, user.email, user.password)
        //         .then(res => {
        //             setUser(res);
        //             setLoggedInUser(res);
        //             history.replace(from);
        //         })

        // }
        if (user.email && user.password) {
            signInWithEmailAndPasswordByCustom(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })

        }
        // console.log('okkk', user.email, newUser, user.password, 'sakil')
        e.preventDefault();
    }

    const handleNeedAccount = () => {
        let url = '/signup';
        history.push(url);
    }

    return (


        <div>
            <div className='from-container'>
                <div >
                    <img className='logo-login' src={logo2} />
                </div>

                <input className='input-style-login' type='email' onBlur={handleBlur} placeholder='Email' required name='email' />
                <input className='input-style-login' type='password' onBlur={handleBlur} placeholder='Password' required name='password' />

             
                <button onClick={handleSubmit} className='btn-login'>Sign In</button>
                <button onClick={handleNeedAccount} className='btn-need-an-account'>Need an account</button>

            </div>
        </div>
    )
}
