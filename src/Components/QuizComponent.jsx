import './QuizComponent.css'
import React from 'react'
import questions from './QuizQuestion.json'
import { useState } from 'react'


function QuizComponent() {
    const [count, setCount] = useState(0)
    console.log(questions);

    const NextQuestion = () => {
        if (count < 14) {
            setCount(count => count +1 )
            console.log("Next",count);
        }
    }
    const PrevQuestion = () =>{
        if (count > 0){
            setCount(count=> count -1)
            console.log("Pre",count);
        }
    }
    const QuitButton = ()=>{
    
        if(window.confirm("Are you sure you want to quit?")){
          window.location.reload(false)
        }
      }

  return (
    <div className='main'>
      <div className='content'>
        <h2 className='question-heading'>Question</h2>
        {console.log(count)}

        <p className='outOf'>{count+1} of 15</p>
        <h3 className='question'>{questions[count].question}</h3>
        <div className='options'>
          <p className='option'>{questions[count].optionA}</p>
          <p className='option'>{questions[count].optionB}</p>
        </div>
        <div className='options'>
          <p className='option'>{questions[count].optionC}</p>
          <p className='option'>{questions[count].optionD}</p>
        </div>
        <div className='buttons'>
          <button className='previous' onClick={PrevQuestion}>Previous</button>
          <button className='next' onClick={NextQuestion}>Next</button>
          <button className='quit'onClick={QuitButton}>Quit</button>
        </div>

      </div>

    </div>
  )
}

export default QuizComponent