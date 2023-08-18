import React, {useContext} from 'react'
import '../css/App.css'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const incomeTotal = transactions.map(item => item.amount).filter(item => item > 0).reduce((acc,value)=> acc+value,0);

    const expenseTotal = transactions.map(item => item.amount).filter(item => item < 0).reduce((acc,value)=> acc+value,0);





  return (

        <div className="inc-exp-container">
                <div>
                <h4>Income</h4>
                <p className='money plus' id='money-plus'>${incomeTotal}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='money minus' id='money-minus'>-${expenseTotal}</p>
            </div>
        </div>
  )
}

export default IncomeExpenses
