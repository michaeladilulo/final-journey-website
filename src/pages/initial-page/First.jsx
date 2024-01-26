import React from "react";
import background from '../../assets/infernal.jpg';
import FirstRiddle from '../../components/FirstRiddle/FirstRiddle'
import './First.css';

const First = () => {
    return (
        <div className='bg'>
            <FirstRiddle />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(50%)'}} />
        </div>
    )
}

export default First;