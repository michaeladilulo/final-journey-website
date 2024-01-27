import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondRiddleCodeForm.css';

const SecondRiddleCodeForm = () => {
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const submittedAnswer = answer.toLowerCase();

        const shouldNavigate = submittedAnswer === 'wjc:+wd4a%re{,q';

        setAnswer("");

        shouldNavigate ? navigate('/you-got-this') : navigate('/nice-you-did-it');
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="second-code-riddle-container">
          <input className="second-code-riddle-input" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </div>
          <button type="submit" className='second-code-riddle-button'>Submit</button>
      </form>
    )
}

export default SecondRiddleCodeForm