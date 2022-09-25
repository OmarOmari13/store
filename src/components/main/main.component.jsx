
import {MainContainer , ButtonLink, Paragraph} from './main.styles'
import Button from "../button/button.component"


const Main = ()=>{
    return(
        <MainContainer>
            <Paragraph>
            <h1>
                wear good, looking good
            </h1>
            <p>wear is better look better than others</p>
            </Paragraph>
            <Button> <ButtonLink to="/home">Shop Now</ButtonLink></Button>
        </MainContainer>
    )
}

export default Main