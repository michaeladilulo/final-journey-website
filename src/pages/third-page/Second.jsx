import React from "react";
import ThirdRiddle from '../../components/ThirdRiddle/ThirdRiddle';
import ThirdRiddleForm from '../../components/ThirdRiddleForm/ThirdRiddleForm';
import background from '../../assets/bookstore.jpg';
import './Second.css';

const Second = () => {
    return (
        <div className='bg'>
            <ThirdRiddle />
            <ThirdRiddleForm />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(45%)'}} />
        </div>
    )
}

export default Second;