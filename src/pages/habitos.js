import { useState } from "react"
import styled from "styled-components"
import Header from "../components/header"
import { ConteinerHabits, CreateHab, FormHab } from "../css/css"



export default function Habits() {

    const [writeHabit, setWriteHabit] = useState(false)
    const [habitName, setHabitName] = useState("")
    const [habitButtonList , setHabitButtonList] = useState([])
    const daysList = ["D",]
    console.log(habitButtonList)

    function writeOn() {
        if (writeHabit === false) {
            setWriteHabit(true)
        }
        else {
            setWriteHabit(false)
        }
    }

    function clickDay(el){
    
        if(!habitButtonList.includes(el)){
            setHabitButtonList([...habitButtonList,el])
        }
        else{
            const filteredList = habitButtonList.filter((i)=> i !== el)
            setHabitButtonList(filteredList)
        }

    }




    return (
        <ConteinerHabits>
            <Header />
            <CreateHab>
                <p>Meus hábitos</p>
                <button onClick={writeOn}>+</button>
            </CreateHab>
            {writeHabit &&
                <FormHab>
                    <input placeholder="nome do hábito" type="text" onChange={(e) => setHabitName(e.target.value)} value={habitName} />
                    <ButtonsDays>
                        <Button selected={habitButtonList.includes(7)?1:0} onClick={()=> clickDay(7)}>D</Button>
                        <Button selected={habitButtonList.includes(1)?1:0} onClick={()=> clickDay(1)}>S</Button>
                        <Button selected={habitButtonList.includes(2)?1:0} onClick={()=> clickDay(2)}>T</Button>
                        <Button selected={habitButtonList.includes(3)?1:0} onClick={()=> clickDay(3)}>Q</Button>
                        <Button selected={habitButtonList.includes(4)?1:0} onClick={()=> clickDay(4)}>Q</Button>
                        <Button selected={habitButtonList.includes(5)?1:0} onClick={()=> clickDay(5)}>S</Button>
                        <Button selected={habitButtonList.includes(6)?1:0} onClick={()=> clickDay(6)}>S</Button>
                    </ButtonsDays>
                    <ButtonsSubmit>
                        <ButtonSend></ButtonSend>
                        <ButtonCancel></ButtonCancel>
                    </ButtonsSubmit>
                </FormHab>}



        </ConteinerHabits>
    )
}

const ButtonsDays = styled.div`
    display:flex;
    height: 30px;
    width:235px;

`
const Button = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 3px;
    border:1px solid #DBDBDB;
    cursor: pointer;
    color: ${props => props.selected?"#FFFFFF":"#DBDBDB"} ;
    background-color:${props => props.selected?"#DBDBDB":"#FFFFFF"} ;
`
const ButtonsSubmit = styled.div`
    display: flex;
    justify-content:flex-end;
`
const ButtonSend = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color:white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    font-weight: 400;
`
const ButtonCancel = styled(ButtonSend)`
    color: #52B6FF;
    background-color: #FFFFFF;

`