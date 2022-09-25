
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
             <ButtonLink to="/home"> <Button>Shop Now</Button> </ButtonLink>
        </MainContainer>
    )
}

export default Main