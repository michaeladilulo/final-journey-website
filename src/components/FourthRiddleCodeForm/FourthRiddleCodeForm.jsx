import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FourthRiddleCodeForm.css';

const FourthRiddleCodeForm = () => {
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const submittedAnswer = answer.toLowerCase();

        const shouldNavigate = submittedAnswer === 'k*-}esr;pyl8?3djsmqfn2';

        setAnswer("");

        shouldNavigate ? navigate('/nicely-done-team') : navigate('/congrats-that-was-amazing');
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

export default FourthRiddleCodeForm