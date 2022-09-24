import Categories from '../categories/categories.component'
import Dropdown from '../dropdown/dropdown.component'
import {DirectoryContainer, Header} from './directory.styles'
const Directory = ()=>{
    return(
        <DirectoryContainer>
            <Header>
                <div>
                    <h2>collection</h2>
                </div>
                <div>
                    <Dropdown/>
                </div>
            </Header>
            <Categories />
        </DirectoryContainer>
    )


}

export default Directory