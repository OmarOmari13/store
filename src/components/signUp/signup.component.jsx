import Button from '../button/button.component'


import {FormContent, SignUpButtonContainer} from './signup.styles'
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
                <SignUpButtonContainer>

                <Button> Sign UP </Button>
                </SignUpButtonContainer>
                </FormContent>
            </form>
        </div>
    )
}

export default SignUp