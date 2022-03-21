import { useState } from 'react';

export const useLogin = () =>{
    const[user, setUser]=useState('');
    const[pass, setPass]=useState('');

    const handleChange = ({target: {name, value}}:any) =>{
        if( name === 'user' ){
            setUser(value)
        }else if( name === 'pass' ){
            setPass(value)
        }
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        console.log(user, pass)
    }

    return{
        user,
        pass,
        handleChange,
        handleSubmit
    }
    
}