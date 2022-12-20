import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    const navigate = useNavigate()

    return (

        <FooterMain data-test="menu">
            <button data-test="habit-link" onClick={()=>navigate("/habitos")}>Hábitos</button>
            <RoundDiv  data-test="today-link">
                <button onClick={()=>navigate("/hoje")}>Hoje</button>
            </RoundDiv>
            <button data-test="history-link"  onClick={()=>navigate("/historico")}>Histórico</button>
        </FooterMain>


    )
}

const FooterMain = styled.div`
    width: 375px;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    button{
        height: 22px;
        width: 79px;
        border: none;
        background-color: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight:400;
        color:#52B6FF;
        cursor: pointer;
    }

`

const RoundDiv = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    button{
        background-color: #52B6FF;
        color:#FFFFFF;
        margin-bottom: 5px;

    }

`