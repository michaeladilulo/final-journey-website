import React from "react";
import FourthRiddleCode from '../../components/FourthRiddleCode/FourthRiddleCode';
import FourthRiddleCodeForm from '../../components/FourthRiddleCodeForm/FourthRiddleCodeForm';
import background from '../../assets/key.jpg';
import './SecondCongrats.css';

const SecondCongrats = () => {
    return (
        <div className='bg'>
            <FourthRiddleCode />
            <FourthRiddleCodeForm />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(45%)'}} />
        </div>
    )
}

export default SecondCongrats;