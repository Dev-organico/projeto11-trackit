import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../components/header"
import { LoginContext } from "../context/loginContext"
import { ConteinerHabits, CreateHab, FormHab } from "../css/css"
import { URL } from "../axios"
import axios from "axios"
import ShowHabits from "../components/showHabits"
import Footer from "../components/footer"



export default function Habits() {

    const [writeHabit, setWriteHabit] = useState(false)
    const [habitName, setHabitName] = useState("")
    const [habitButtonList , setHabitButtonList] = useState([])
    console.log(habitButtonList)
    const {apiForm} = useContext(LoginContext)
    const token = apiForm.token
    const [habitList, setHabitList] = useState(undefined)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function loadHabits(){

        
        axios.get(`${URL}habits`, config)
            .then((el) => {
                setHabitList(el.data.reverse())
            })
            .catch((el) => {
                alert(el.response.data.error)
                
            })
    }

    

    useEffect(loadHabits, [])


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


    function cancelHabit(){
        setWriteHabit(false)
    }

    function saveHabit(){

        

        const body = {

            name: habitName,
            days: habitButtonList

        }
        

        axios.post(`${URL}habits`,body , config)
        .then((el)=>{
        console.log(el)
        setHabitName("")
        setHabitButtonList([])
        loadHabits()
        setWriteHabit(false)
        })
        .catch((el)=>{
        console.log(el.response.data)
        alert("nao foi")
        })

        
        

    }


    return (
        <ConteinerHabits>
            <Header />
            <CreateHab>
                <p>Meus hábitos</p>
                <button data-test="habit-create-btn" onClick={writeOn}>+</button>
            </CreateHab>
            {writeHabit &&
                <FormHab data-test="habit-create-container">
                    <input data-test="habit-name-input"  placeholder="nome do hábito" type="text" onChange={(e) => setHabitName(e.target.value)} value={habitName} />
                    <ButtonsDays>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(7)?1:0} onClick={()=> clickDay(7)}>D</Button>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(1)?1:0} onClick={()=> clickDay(1)}>S</Button>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(2)?1:0} onClick={()=> clickDay(2)}>T</Button>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(3)?1:0} onClick={()=> clickDay(3)}>Q</Button>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(4)?1:0} onClick={()=> clickDay(4)}>Q</Button>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(5)?1:0} onClick={()=> clickDay(5)}>S</Button>
                        <Button data-test="habit-day"  selected={habitButtonList.includes(6)?1:0} onClick={()=> clickDay(6)}>S</Button>
                    </ButtonsDays>
                    <ButtonsSubmit>
                        <ButtonCancel data-test="habit-create-cancel-btn" onClick={cancelHabit} >Cancelar</ButtonCancel>
                        <ButtonSave data-test="habit-create-save-btn" onClick={saveHabit} >Salvar</ButtonSave>
                    </ButtonsSubmit>
                    
                </FormHab>}
                <ShowHabits habitList={habitList} loadHabits={loadHabits}/>


                <Footer/>    
        </ConteinerHabits>
        
    )
}

const ButtonsDays = styled.div`
    display:flex;
    height: 30px;
    width:235px;
    margin-left: 19px;

`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 3px;
    border:1px solid #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    margin-right: 4px;
    cursor: pointer;
    color: ${props => props.selected?"#FFFFFF":"#CFCFCF"} ;
    background-color:${props => props.selected?"#CFCFCF":"#FFFFFF"} ;
`
const ButtonsSubmit = styled.div`
    display: flex;
    justify-content:flex-end;
`
const ButtonSave = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color:white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-top: 30px;
    margin-right: 16px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`
const ButtonCancel = styled(ButtonSave)`
    color: #52B6FF;
    background-color: #FFFFFF;
   

`