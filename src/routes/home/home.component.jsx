import Directory from '../../components/directory/directory.component';
import SideBar from '../../components/sidebar/sidebar.component';
import { HomeContainer} from './home.styles'



   
  
const Home=()=>{
    
    return(
        <HomeContainer>
            <SideBar/>
            <Directory/>       
        </HomeContainer>
    )


}

export default Home