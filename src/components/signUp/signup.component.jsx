import Button from '../button/button.component'

import {FormContent} from './signup.styles'
const SignUp = ()=>{
    return(
        <div>
            <form>
                <FormContent>
                <span>Name</span>
                <input type="text" placeholder='Name' />
                <span>LastName</span>
                <input type="text" placeholder='LastName' />
                <span>email</span>
                <input type="email" placeholder='email'/>
                <span>Password</span>
                <input type="password" placeholder='password'/>
                <Button>Sign UP</Button>
                </FormContent>
            </form>
        </div>
    )
}

export default SignUp