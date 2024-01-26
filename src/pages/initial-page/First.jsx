import React from "react";
import background from '../../assets/infernal.jpg';
import FirstRiddle from '../../components/FirstRiddle/FirstRiddle';
import FirstRiddleInput from '../../components/FirstRiddleInput/FirstRiddleInput';
import './First.css';

const First = () => {
    return (
        <div className='bg'>
            <FirstRiddle />
            <FirstRiddleInput />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(45%)'}} />
        </div>
    )
}

export default First;