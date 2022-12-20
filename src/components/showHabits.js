import styled from "styled-components";
import { BsTrash } from "react-icons/bs"
import axios from "axios";
import { URL } from "../axios";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

export default function ShowHabits({ habitList, loadHabits }) {

    const { apiForm } = useContext(LoginContext)
    const token = apiForm.token
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    function deleteHabit(el) {
        const confirmed = window.confirm("Deseja deletar o hábito?")
        if (confirmed) {
            axios.delete(`${URL}habits/${el}`, config).then(() => {
                loadHabits()
            })

        }

    }


    if (habitList === undefined || habitList.length === 0 ) {
        return (
            <DivLoading>
                <p>
                    Você não tem nenhum hábito<br/> cadastrado ainda.
                    Adicione um hábito<br/>  para começar a trackear!
                </p>
            </DivLoading>
        )

    }

    return (

        <HabitsConteiner>

            {habitList.map(el =>
                <ReadyHabit data-test="habit-container" key={el.id}>
                    <LeftConteiner>
                        <p  data-test="habit-name" >{el.name}</p>
                        <Days data-test="habit-day">
                            <Day data-test="habit-day" selected={el.days.includes(7) ? 1 : 0}>D</Day>
                            <Day data-test="habit-day"selected={el.days.includes(1) ? 1 : 0}>S</Day>
                            <Day data-test="habit-day"selected={el.days.includes(2) ? 1 : 0}>T</Day>
                            <Day data-test="habit-day"selected={el.days.includes(3) ? 1 : 0}>Q</Day>
                            <Day data-test="habit-day" selected={el.days.includes(4) ? 1 : 0}>Q</Day>
                            <Day data-test="habit-day"selected={el.days.includes(5) ? 1 : 0}>S</Day>
                            <Day data-test="habit-day"selected={el.days.includes(6) ? 1 : 0}>S</Day>
                        </Days>
                    </LeftConteiner>
                    <RightConteiner>
                        <p>
                            <BsTrash data-test="habit-delete-btn" onClick={() => deleteHabit(el.id)} />
                        </p>
                    </RightConteiner>
                </ReadyHabit>
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

const ReadyHabit = styled.div`
    display: flex;
    height: 91px;
    width: 340px;
    margin-bottom:10px ;
    margin-left: 17px;
    color:#666666;
    border-radius:5px;
    background-color: #FFFFFF;
    box-sizing: border-box;
   
`
const Days = styled.div`
    display:flex;
    height: 30px;
    width:235px;
    margin-left: 14px;
    margin-top: 8px;

`

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 3px;
    border:1px solid #DBDBDB;
    margin-right: 4px;
    color: ${props => props.selected ? "#FFFFFF" : "#CFCFCF"} ;
    background-color:${props => props.selected ? "#CFCFCF" : "#FFFFFF"} ;
`

const LeftConteiner = styled.div`
    width: 235px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color:#666666;
        margin-left: 15px;
        margin-top: 13px;
    }
    
`

const RightConteiner = styled.div`
    width: 105px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    p{
        font-size: 15px;
        margin-left: 80px;
        margin-top: 11px;
        cursor: pointer;
    }
`
