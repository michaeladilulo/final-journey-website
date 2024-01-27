import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstRiddleForm.css';

const FirstRiddleForm = () => {
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const submittedAnswer = answer.toLowerCase();

        const shouldNavigate = submittedAnswer === 'infernal';

        setAnswer("");

        shouldNavigate ? navigate('/nice-you-did-it') : navigate('/');
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="first-riddle-container">
          <input className="first-riddle-input" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </div>
          <button type="submit" className='first-riddle-button'>Submit</button>
      </form>
    )
}

export default FirstRiddleForm