import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Balance from './Components/Balance/Balance'
import IncomeExpenses from './Components/IncomeExpenses/IncomeExpenses'
import TransactionHistory from './Components/TransactionHistory/TransactionHistory'
import TransactionForm from './Components/TransactionForm/TransactionForm'


const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='Container'>
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <TransactionForm />
      </div>
    </div>
  )
}

export default App












































































// import React, {useState} from 'react'
// import Input from './Components/Input/Input'

// const App = () => {
//   const[inputValue, setInputValue]= useState("")
//   const[todos, setTodos]= useState([])

//   const changeHandler = (e) => {
//     // console.log(e.target.value);
//     let newValue = e.target.value
//     setInputValue(newValue)
//   }
//   const addTask = () => {
//     let newTodo = inputValue
//     setTodos([...todos, newTodo])
//     // console.log(todos);
//     setInputValue("")
//   }
  
//   let key = Math.floor(Math.random()*100)
//   let todoList = todos.map(todo => {
//     return <h1 key={key}>{todo}</h1>
//   })

//   return (
//     <div>
//       <Input
//        value={inputValue}
//        onChange={changeHandler}
//        onClick = {addTask}
//        />

//        <ul>
//         {todoList}
//        </ul>
//        <p>{key}</p>
       
//     </div>
//   )
// }

// export default App
// // let key = math.floor((math.random)*100)

// // let todoList = todos.map(todo => {
// //   return <h1 key={key}>{todo}</h1>
// // })

// // <ul>
// //   {todoList}
// // <ul/>