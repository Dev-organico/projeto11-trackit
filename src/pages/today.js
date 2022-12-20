import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import { LoginContext } from "../context/loginContext"
import { URL } from "../axios"
import TodayHabit from "../components/todayHabit"


export default function Today(){
    const [todayTitle , setTodayTitle] = useState("")
    require("dayjs/locale/pt-br")
    const todayJs = require("dayjs")
    let DateToday = todayJs().locale("pt-br").format("dddd , DD/MM")

    const [todayObj , setTodayObj] = useState(undefined)
    const {apiForm} = useContext(LoginContext)
    const token = apiForm.token
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    console.log(todayObj)

    useEffect(()=>{
        
        setTodayTitle(DateToday)},[])

    

    function loadTodayHabit (){

        axios.get(`${URL}habits/today`, config)
        .then((el) => {
            setTodayObj(el.data)
            
        })
        .catch((el) => {
            console.log(el.response.data)
            ("nao foi")
        })
    }


    useEffect(loadTodayHabit,[])





    return(
        <ConteinerToday>
            <Header/>
            <p data-test="today">{todayTitle}</p>
            <TodayHabits>
    
                <TodayHabit loadTodayHabit={loadTodayHabit} todayObj={todayObj}/>

    
            </TodayHabits>
            <Footer/>
        </ConteinerToday>

    )
}

const ConteinerToday = styled.div`
    display: flex;
    flex-direction: column;
    width:375px ;
    height:1000px;
    margin-top: 70px;
    background-color:#D4D4D4;

`
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

const TodayHabits = styled.div`
    display: flex;
    flex-direction: column;
    width:375px ;
    height:1000px;
    background-color:#D4D4D4;
    
`

