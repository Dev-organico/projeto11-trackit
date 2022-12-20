import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";


export default function Historic() {

    return (
        <ConteinerHistoric>
            <Header />
            <TitleH>
                <h1>Histórico</h1>
            </TitleH>
            <Main>
                <p>Em breve você poderá ver o histórico<br/> dos seus hábitos aqui!</p>
            </Main>
            <Footer />
        </ConteinerHistoric>
    )
}

const ConteinerHistoric = styled.div`
    display: flex;
    flex-direction: column;
    width:375px ;
    height:1000px;
    margin-top: 70px;
    background-color:#D4D4D4;
  
`
const TitleH = styled.div`

        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        margin-left: 17px;
        color: #126BA5;
        margin-top: 28px;

`

const Main = styled.div`
    margin-top: 10px;
     p{
        margin-left: 19px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
        line-height: 22px;
        margin-top: 10px;
    }

`