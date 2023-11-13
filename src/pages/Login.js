import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase'
import { useNavigate } from 'react-router-dom'

function Login() {

    const history = useNavigate();
    const firebase = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = () =>{

    };

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, [])
    return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
        <p>Weeee!!!</p>
    </div>
  )
}

export default Login