import { Form } from 'react-router-dom'

// library

import  { UserPlusIcon } from '@heroicons/react/24/outline'


// assets
import illustration from '../assets/illustration.jpg'

// action
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const userName = data.get('userName');
    
    if (!userName) {
        return null;
    }
    
    // save the user name in local storage
    localStorage.setItem('userName', userName);
    
    // return a success message
    return { success: true, userName };
}

const Intro = () => {
  return (
    <div className='intro'>
        <div>
            <h1>
                Take Control of <span className='accent'>Your Money</span>
            </h1>
            <p>
                Personal Budgeting is the key to financial success.
                Start your journey today.
            </p>
            <Form method='post'>
                <input type="text" name='userName' required placeholder="What's Your Name?" aria-label='Your Name' autoComplete='given-name' />
                <button type='submit' className='btn btn--dark'>
                    <span>
                        Start Budgeting
                    </span>
                    <UserPlusIcon className='icon' width={20} />
                </button>
            </Form>
        </div>
        <img src={illustration} alt="person with money" width={600}/>
    </div>
  )
}

export default Intro