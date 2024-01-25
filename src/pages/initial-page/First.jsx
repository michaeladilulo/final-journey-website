import React from "react";
import background from '../../assets/infernal.jpg';
import './First.css';

const First = () => {
    return (
        <div className='bg'>
        <img src={background} 
        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw'}} />
        </div>
    )
}

export default First;