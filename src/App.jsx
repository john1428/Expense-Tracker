
import viteLogo from '/vite.svg'
import './css/App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'



function App() {

  return (
    <GlobalProvider>
      <h1 id="top"> Expense Tracker</h1>
      <div className='container'> 
        <Balance/> 
        <IncomeExpenses/>
       <TransactionList/>
       <AddTransaction/>
      </div>
      
      
    </GlobalProvider>
  )
}

export default App
