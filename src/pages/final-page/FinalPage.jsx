import React from "react";
import background from '../../assets/travel.jpg';
import CoordinatesFinalPage from '../../components/CoordinatesFinalPage/CoordinatesFInalPage';
import './FinalPage.css';

const FinalPage = () => {
    return (
        <div className='bg'>
            <CoordinatesFinalPage />
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: 'brightness(45%)'}} />
        </div>
    )
}

export default FinalPage;