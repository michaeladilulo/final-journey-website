import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThirdRiddleForm.css';

const ThirdRiddleForm = () => {
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const submittedAnswer = answer.toLowerCase();

        const shouldNavigate = submittedAnswer === 'a bookstore' || submittedAnswer === 'bookstore';

        setAnswer("");

        shouldNavigate ? navigate('/congrats-that-was-amazing') : navigate('/you-got-this');
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="third-riddle-container">
          <input className="third-riddle-input" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        </div>
          <button type="submit" className='third-riddle-button'>Submit</button>
      </form>
    )
}

export default ThirdRiddleForm