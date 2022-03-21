import { useState } from 'react';

export const useLogin = () =>{
    const[user, setUser]=useState('');
    const[pass, setPass]=useState('');
    const[err, setErr]=useState({
        user:{
            errStateUser: false,
            errTextUser: ''
        },
        pass:{
            errStatePass: false,
            errTextPass: ''
        }
    });

    const[currentUser, setCurrentUser]=useState({
        user: "20192itir007",
        pass: "123456"
    });

    const handleChange = ({target: {name, value}}:any) =>{
        if( name === 'user' ){
            setUser(value)
        }else if( name === 'pass' ){
            setPass(value)
        }
    }

    const verifyUser = ()=>{
        if( user != '' && pass != '' ){

        }else if( user === '' && pass === '' ){
            setErr({
                user:{
                    errStateUser: true,
                    errTextUser: 'Necesita llenar el campo'
                },
                pass:{
                    errStatePass: true,
                    errTextPass: 'Necesita llenar el campo'
                }
            })
        }else if( user === '' ){
            setErr({...err, user:{errStateUser: true, errTextUser: 'Necesita llenar el campo'}})            
        }else if( pass === '' ){
            setErr({...err, pass:{errStatePass: true, errTextPass: 'Necesita llenar el campo'}})
        }
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        verifyUser();
    }

    return{
        user,
        pass,
        handleChange,
        handleSubmit,
        err
    }
    
}