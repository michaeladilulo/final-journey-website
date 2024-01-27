import React from "react";
import SecondRiddleCode from '../../components/SecondRiddleCode/SecondRiddleCode';
import SecondRiddleCodeForm from '../../components/SecondRiddleCodeForm/SecondRiddleCodeForm';
import background from '../../assets/awaits.jpg';
import './FirstCongrats.css';

const FirstCongrats = () => {
    return (
        <div className='bg'>
            <SecondRiddleCode />
            <SecondRiddleCodeForm />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(45%)'}} />
        </div>
    )
}

export default FirstCongrats;