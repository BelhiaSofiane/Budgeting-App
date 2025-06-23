import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Form } from 'react-router-dom'

const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
        <h2 className='h3'>
            create budget
        </h2>
        <Form className='grid-sm' method='post'>
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input 
                type="text" 
                name='newBudget' 
                id='newBudget'
                required
                placeholder='e.g. Groceries, Rent, etc.'
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount">Amount</label>
                <input 
                type="Number" 
                step="0.01" 
                name='newBudgetAmount' 
                id ="newBudgetAmount" 
                placeholder='e.g , $299' 
                required
                inputMode='decimal'
                />
            </div>
            <button className='btn btn--dark' type='submit'>
                <span>Create Budget</span>
                <CurrencyDollarIcon className='icon' width={20} />
            </button>        
        </Form>
    </div>
  )
}

export default AddBudgetForm