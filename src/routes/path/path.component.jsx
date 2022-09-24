import { Outlet } from "react-router-dom";
import { PathContainer } from "./path.styles";
const Path = ()=>{
    return (
        <div>
        <PathContainer>
            <h4>Home</h4>
        </PathContainer>
            <Outlet/>
        </div>
    )
}

export default Path;