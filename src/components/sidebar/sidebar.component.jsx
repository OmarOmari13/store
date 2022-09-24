
import {SideBarContainer,SideBarContent} from './side.styles'
const SideBar = ()=>{
    return(
        <SideBarContainer>
                <h3>Filters</h3>
            <SideBarContent>
            <div><h3>Brand</h3></div>
                <div>
                   <input type='checkbox' name="a"/>
                   <label for="a">American Eagle</label>
                </div>
                <div>

                   <input type='checkbox' name="b"/>
                   <label for="b">Hollister</label>
                </div>
                <div>

                   <input type='checkbox' name="c"/>
                   <label for="c">Pull & Bear</label>
                </div>
                <div>

                   <input type='checkbox' name="d"/>
                   <label for="d">Zara</label>
                </div>

            </SideBarContent>
            <SideBarContent>
                <div><h3>Category</h3></div>
                <div>
                   <input type='checkbox' name="a"/>
                   <label for="a">Hoodies</label>
                </div>
                <div>

                   <input type='checkbox' name="b"/>
                   <label for="b">Jeans</label>
                </div>
                <div>

                   <input type='checkbox' name="c"/>
                   <label for="c">Polos</label>
                </div>
                <div>

                   <input type='checkbox' name="d"/>
                   <label for="d">Shirts</label>
                </div>
                

            </SideBarContent>
        </SideBarContainer>
    )
}


export default SideBar


