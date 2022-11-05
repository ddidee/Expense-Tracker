import React from 'react'
import "./TransactionHistory.css"

const TransactionHistory = () => {
  return (
    <div className='TransactionHistory'>
      <h2>History</h2>
      <div className="Transaction">
        <ul>
          <li>
            Salary <span>N200</span>
          </li>
          <li>
            Rent <span>N200</span>
          </li>
          <li>
            Stationery <span>N200</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default TransactionHistory
