import './Signup.css'

import React, { useContext, useState } from 'react'
import logo2 from './logo2.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPasswordByCustom } from './loginManager';

export default function Signup() {


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
        if (event.target.name === 'confirmPassword') {
            let isMatched = event.target.value === user.password;
            if (!isMatched) {
                event.target.value = ''
            }
        }
        if (isFildValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);

        }
    }

    const handleSubmit = (e) => {
        if (user.name && user.password) {
            createUserWithEmailAndPasswordByCustom(user.name, user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })

        }
        // if (user.email && user.password) {
        //     signInWithEmailAndPasswordByCustom(user.email, user.password)
        //         .then(res => {
        //             setUser(res);
        //             setLoggedInUser(res);
        //             history.replace(from);
        //         })

        // }
        console.log('okkk', user.email, newUser, user.password, 'sakil')
        e.preventDefault();
    }

    const handleAlreadyAccount = () => {
        let url = '/login';
        history.push(url);
    }
    return (


        <div>
            <div className='from-container'>
                <div>
                    <img className='logo-signup' src={logo2} />
                </div>
                <input className='input-style-signup' type='text' onBlur={handleBlur} placeholder='Name' required name='name' />
                <input className='input-style-signup' type='email' onBlur={handleBlur} placeholder='Email' required name='email' />
                <input className='input-style-signup' type='password' onBlur={handleBlur} placeholder='Password' required name='password' />
                <input className='input-style-signup' type='password' onBlur={handleBlur} placeholder='Confirm Password' required name='confirmPassword' />
                <button onClick={handleSubmit}
                className='btn-signup'>Sign In</button>
                <button onClick={handleAlreadyAccount} className='btn-already-account'>Already have an account</button>

            </div>
        </div >
    )
}
