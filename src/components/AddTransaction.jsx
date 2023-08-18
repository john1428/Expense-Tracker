import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
const AddTransaction = () => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);

    let newElement = {
        title : {title},
        amount : {amount}
    }

    const { addTransaction } = useContext(GlobalContext);







    let btnActive = (title !="" && amount !=0) ? {"backgroundColor" : "#301934"} : {}


    const handleSubmit = event =>{
        event.preventDefault();
        const newTransaction = {
            id : uuidv4(),
            text : title,
            amount : +amount
        }
        if(title !== "" && amount !== 0){
            addTransaction(newTransaction)
        }
        
        setTitle("");
        setAmount(0);


        console.log("sidharth form submit");


    }

  return (
    <div>

        <h3>Add New Transaction</h3>

        <div>
            <form onSubmit={handleSubmit}>

                <div className='form-control'>
                <label htmlFor='text'>
                    Text :
                    </label>
                    <input type="text" value = {title} onChange={(e) => {setTitle(e.target.value)}} placeholder='Enter Text' />
                

                </div>
                <div className='form-control'>
                <label htmlFor='amount'>
                    Amount :<br/>
                    (negative - expense, positive-income)
                    </label>

                    <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder='Enter Amount ...' />
                
                </div>


                <button className='btn' style= {btnActive}>
                    Add Transaction
                </button>

                
                

            </form>
        </div>
      
    </div>
  )
}

export default AddTransaction
