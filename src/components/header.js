import { HeadBar } from "../css/css";
import { LoginContext } from "../context/loginContext";
import { useContext } from "react";

export default function Header(){

    const {apiForm} = useContext(LoginContext)
   

    return (
        
        <HeadBar>
            <p>TrackIt</p>
            <img src={apiForm.image}/>
        </HeadBar>


    )
}