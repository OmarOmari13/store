import { Outlet } from "react-router-dom"
import { NavigationContainer,
        Navigator,
        LogoContainer,
        NavLinkContainer,
        NavLink,
        Heart,
        AddTOCart,
        User,
        Logo,
        LogoText

} from "./navigation.styles"


const Navigation = ()=>{
    return(
        <NavigationContainer>
            <Navigator>
                <LogoContainer>
            <span><Logo /> <LogoText>Three Angle Store</LogoText></span>
            </LogoContainer>
            <NavLinkContainer>
            <NavLink to="/"><Heart /></NavLink>
            <NavLink to="/"><AddTOCart/></NavLink>
            <NavLink to="/signup"><User /></NavLink>
            </NavLinkContainer>
            </Navigator>

            <Outlet/>
        </NavigationContainer>
    )
}
export default Navigation