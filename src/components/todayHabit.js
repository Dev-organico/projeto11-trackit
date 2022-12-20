import styled from "styled-components"
import { BsCheckSquareFill } from "react-icons/bs"
import { useContext } from "react"
import { LoginContext } from "../context/loginContext"
import { URL } from "../axios"
import axios from "axios"


export default function TodayHabit({todayObj, loadTodayHabit}){

    const {apiForm} = useContext(LoginContext)
    const token = apiForm.token
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    function checkHabit(i,j){

        


        

        if(j === false){

            axios.post(`${URL}habits/${i}/check`,{} , config)
            .then((el)=>{
                loadTodayHabit()
                
            
            })
            .catch((el)=>{
            alert(el.response.message)
            })
            
        }
        else{

            axios.post(`${URL}habits/${i}/uncheck`,{} , config)
            .then((el)=>{
                loadTodayHabit()
            
            })
            .catch((el)=>{
            alert(el.response.message)
            })
    


        }



    }

    if(todayObj === undefined){
        return(
            <DivLoading>
                <p>
                    Carregando...
                </p>
            </DivLoading>
        
        )
    }

    return(
        <HabitsConteiner>
            {todayObj.map(el=>
             <Habits data-test="today-habit-container" key={el.id}>
                <LeftDiv>
                    <h1 data-test="today-habit-name">{el.name}</h1>
                    {el.currentSequence > 0?
                    <GreenText>
                        <h2 data-test="today-habit-sequence">{`Sequência atual: ${el.currentSequence}`}</h2>
                    </GreenText>:
                    <GreyText>
                        <h2 data-test="today-habit-sequence">{`Sequência atual: ${el.currentSequence}`}</h2>
                    </GreyText>
                    }

                    <h2 data-test="today-habit-record">{`Seu recorde: ${el.highestSequence}`}</h2>
                    
                </LeftDiv>
                <RightDiv>
                    {el.done === false?<CheckButtonGrey>
                        <BsCheckSquareFill data-test="today-habit-check-btn" onClick={()=>checkHabit(el.id,el.done)}/>
                    </CheckButtonGrey>:
                    <CheckButtonGreen>
                        <BsCheckSquareFill data-test="today-habit-check-btn" onClick={()=>checkHabit(el.id,el.done)}/>
                    </CheckButtonGreen>}
                </RightDiv>
                
             </Habits>   
                
                
                )}

        </HabitsConteiner>
        
    )

}


const DivLoading = styled.div`
    width: 375px;
    height: 1000px;
    p{
        margin-left: 19px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
        line-height: 22px;
        margin-top: 10px;
    }
`

const HabitsConteiner = styled.div`
    height: 1000px;
    width: 375px;
    margin-top: 10px;
    margin-bottom: 160px;

`

const Habits = styled.div`
    display: flex;
    justify-content: space-between;
    height: 91px;
    width: 340px;
    margin-bottom:10px ;
    margin-left: 17px;
    color:#666666;
    border-radius:5px;
    background-color: #FFFFFF;
    box-sizing: border-box;
   
`

const LeftDiv = styled.div`
    h1{
        margin-left: 19px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        margin-top: 10px;
    }
    h2{
        margin-left: 19px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        margin-top: 5px;

    }
   
`

const RightDiv = styled.div`
`
const CheckButtonGrey = styled.div`
    font-size: 69px;
    color:#E7E7E7;
    cursor: pointer;
    margin-top: 13px;
    margin-right:13px;
`

const CheckButtonGreen = styled.div`
    font-size: 69px;
    color: #8FC549;
    cursor: pointer;
    margin-top: 13px;
    margin-right:13px;

`

const GreyText = styled.div`
    color: #666666;
    h2{
        margin-left: 19px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        margin-top: 5px;

    }


`

const GreenText = styled.div`
    color: #8FC549;
    h2{
        margin-left: 19px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        margin-top: 5px;

    }
`