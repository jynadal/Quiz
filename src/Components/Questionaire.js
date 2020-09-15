import React, {useState} from 'react';

const Questionaire = ({  data: {id, question, propositions, réponse, anecdote}, count}) => {
  const [answer, setAnswer] = useState(propositions);
  const [countScore, setCountScore] =useState(0);


  return (
    <div>
      <h2>Question 1 /{question.length}</h2>

      <div className='bg-white text-purple- 800 p-10 rounded-lg shadow-md'>
        <h3 className="text-2xl">
          {question}         
        </h3>
      </div>
      <div className='grid grid-cols-2 gap-6 mt-6'>

        {answer.map((proposition, index)=> (
         <button key={index} className='bg-white p-4 text-purple-800 font-semibold rounded shadow' onClick={()=> {
           setAnswer([proposition]);
           //selected([proposition]);
           if(proposition === réponse) {
             const count = countScore + 1;
             console.log(count);
           }

         }}>
           {proposition}
           </button>
         ) )}

        {/* <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'></button>
        <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{propositions[1]}</button> */}

        </div>     
    </div>

);
      };

export default Questionaire;