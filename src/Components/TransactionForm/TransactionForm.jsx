import React , {useState} from 'react'
import Button from '../Button/Button'
import "./TransactionForm.css"

const TransactionForm = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value)
        // console.log(text);
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
        // console.log(amount);
    }
  return (
    <div className='TransactionForm'>

      <h3>Add New Transaction</h3>

      <form action="">
        <div className='Input'>
            <label htmlFor="Name" >Name</label>

            <input
             type="text" value={text}
             onChange={handleTextChange}
             placeholder='Enter Name...' />

        </div>

        <div className='Input'>

            <label htmlFor="Amount" >Amount</label>

            <input
             type="text"
             value={amount}
             placeholder='0.00'
             onChange={handleAmountChange} />

        </div>

        <div className='Button'>
            <Button
             text="Add Income"
             color="green" />

            <Button
             text="Add Expense"
             color="red" />
        </div>

      </form>

    </div>
  )
}

export default TransactionForm
