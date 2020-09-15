import React, {useState, useEffect} from 'react';
import './App.css';

import { Questionaire } from './Components';

//const API_URL = 'https://www.kiwime.com/oqdb/files/2164374889/OpenQuizzDB_164/openquizzdb_164.json';
const API_URL = ' https://cors-anywhere.herokuapp.com/https://www.kiwime.com/oqdb/files/2164374889/OpenQuizzDB_164/openquizzdb_164.json';



function App() {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);




  useEffect(() =>{

    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.quizz.fr.débutant);
      setQuestions(data.quizz.fr.débutant);
    })
  
  },[])

  const setAnswer = () => {

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < 10){
    setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }


  return (
    questions.length > 0 ? (
    <div className='container'>
      {showScore ? (
        <div className='bg-white text-purple- 800 p-10 rounded-lg shadow-md'>The score is 
        {/* {count} */}
        /10 </div>

      ) : (
      <Questionaire data={questions[currentQuestion]}
       //count={count}
       />
      )}     
    </div>
    
    ) : (
      <h2> Loading ... </h2>
    )
  );
}

export default App;