import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {

    const sign = transaction.amount >0 ? '+' : '-';

    const signclass = transaction.amount >0 ? 'plus' : 'minus';

    const {deleteTransaction} = useContext(GlobalContext);




  return (
    <div>
        <li key={transaction.id} className={signclass}>{transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> <button onClick = {()=>deleteTransaction(transaction.id)} className='delete-btn' >x</button></li>
    </div>
  )
}

export default Transaction
