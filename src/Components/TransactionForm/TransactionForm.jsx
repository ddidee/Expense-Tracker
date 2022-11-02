import React from 'react'
import Button from '../Button/Button'
import "./TransactionForm.css"

const TransactionForm = () => {
  return (
    <div className='TransactionForm'>

      <h3>Add New Transaction</h3>

      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" />
        <label htmlFor="Amount">Amount</label>
        <input type="text" />

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
