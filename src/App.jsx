import {React, useState} from "react";
import Question from "./components/question";

export default function App(){
  const quizData = [
    {id: 1, question: 'capital city of Rwanda is Toronto', answer: false},
    {id: 2, question: 'HE Paul Kagame is president of Rwanda', answer: true},
    {id: 3, question: 'Quizzly was developed by ghislain-soft-innovations', answer: true}
  ]

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswer(userAnswer){
    const correct = quizData[current].answer = userAnswer;
    setFeedback(correct ? "Correct" : "Incorrect")
    if(correct) setScore(score + 1);

    setTimeout(() => {
      if(current + 1 < quizData.length){
        setCurrent(current + 1);
        setFeedback("")
      }else{
        setIsFinished(true);
      }
    }, 1000);
  }
  
  return(
    <div>
      
      {!isFinished ? (
        <>
        <Question data={quizData[current]} onAnswer={handleAnswer}/>
        {feedback && <h2>{feedback}</h2>}
        </>
      ): (
        <h2>You score: {score}/{quizData.length}</h2>
      )}
    </div>
    
  )
}