import React from "react";
import background from '../../assets/infernal.jpg';
import FirstRiddle from '../../components/FirstRiddle/FirstRiddle';
import FirstRiddleForm from '../../components/FirstRiddleForm/FirstRiddleForm';
import './First.css';

const First = () => {
    return (
        <div className='bg'>
            <FirstRiddle />
            <FirstRiddleForm />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(45%)'}} />
        </div>
    )
}

export default First;