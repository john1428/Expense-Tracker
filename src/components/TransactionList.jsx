import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

    let datas = [];

    const [listArray, setListArray] = useState(datas);

    const { transactions } = useContext(GlobalContext);

  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
                {transactions.map((item) => <Transaction key={item.id} transaction = {item}/>)}
        </ul>
      
    </div>
  )
}

export default TransactionList
