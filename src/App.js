import './App.css';
import Form from './Form';
import { useState } from "react"


function App() {
const [all, setAll] = useState([])
const [page, setPage] = useState(1)

const handleSubmit= (data)=> {
  let myQuestion = Object.values(data).splice(0,1)
  let optArrC = Object.values(data).splice(1,4)
  let num = Math.floor(Math.random() * ((optArrC.length-1) - 0 + 1)) + 0;
  let date = Date.now()
  console.log("optArrC", optArrC)
  console.log("Here's the data", data)
  const singleQuestion =
    {
      id: date,
      question: myQuestion[0],
      answer: optArrC[num]
    }
console.log("singleQuestion", singleQuestion)
  setAll(prevState => { return [...prevState, {id: singleQuestion.id, question: singleQuestion.question, answer: singleQuestion.answer}]})
  console.log("all",all)
  return ( all, handleClick(2) )
}

const handleClick = (value) => {
  setPage(value)
}

const getFavorite = () => {
  let fav;
  console.log(all)
  all.forEach(question => {
    let id = question.id
    let rev = 0
    console.log(question.question)
    let questionText = question.question.toLowerCase()
    let rev2 = 0
    all.forEach(questionRem => {
      let id2 = questionRem.id
      let questionText2 = questionRem.question.toLowerCase()
      if (id2 !== id) {
        if (questionText === questionText2) {
          return rev2 += 1
        }
      }
    })

    if (rev2 > rev) {
      fav = question;
    }
    rev2 = 0;
  })
  console.log(fav)
  return fav;
}
  return (
    <div className="App container">
      <h3>QuickQuestion</h3>
      <div>
      {page === 2 ? (
              <QueryResponse data = {all[all.length - 1]}/>
      ) : 
       page === 3 ? (
        <QueryResponse data = {all} />
      ) : 
      page === 4 ? (
        <QueryResponse data = {getFavorite()} />
      ) :
      <Form handleSubmit = {handleSubmit}/> 
      }
      </div>
      <div className="nav">
        <button onClick={()=> handleClick(1)}> Ask a Question</button>
        <button onClick={()=> handleClick(4)}>Favorite Question</button>
        <button onClick={()=> handleClick(3)}>All Questions</button>
      </div>
    </div>
  );
}

const QueryResponse = ({data}) => {
  return (
    <div>
        {
          data ? (
            data.length > 0 ? (
              data.forEach(datum => {
                  return (
                    <div>
                      <h4>{datum.question}</h4>
                      <p>{datum.answer}</p>
                    </div>
                  )
                })
            ) : (
              <div>
                <h4>{data.question}</h4>
                <p>{data.answer}</p>
            </div>
            )
          ) : (
              <div>
                <p>Nothing to display!</p>
              </div>
          )
        }
    </div>
  )
}


export default App;
