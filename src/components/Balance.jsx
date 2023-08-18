import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {

    const { transactions } = useContext(GlobalContext)

    // const totals = transactions.reduce()

    let amounts = transactions.map(transaction => transaction.amount)

    console.log(amounts)

    let totals = amounts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);

  return (
      <>
            <h4>Your Balance</h4>
            <h1 id="balance">${totals}</h1>
    </>
  )
}

export default Balance
