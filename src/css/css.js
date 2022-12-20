import styled from "styled-components"


export const Conteiner = styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
        img{
            margin-top: 68px;
            width:180px;
        }
        p{
            color:#52B6FF;
            font-size: 14px;
            margin-top: 25px;
            text-decoration: underline;
            
        }

`
export const Form = styled.div`
    margin-left: 36px;
    margin-top: 33px;
        input{
            width: 303px;
            height: 45px;
            margin-bottom: 6px;
            border-radius: 3px;
            border: 1px solid #D4D4D4;
            box-sizing: border-box;
            color: grey;
            padding-left: 11px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            &:focus{
                outline: none;
            }
            &::placeholder{
            color: #DBDBDB;
            }   
        }
        button{
            width: 303px;
            height: 45px;
            background-color: #52B6FF;
            border-radius: 3px;
            border: none;
            box-sizing: border-box;
            color:white;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            cursor: pointer;
            
        }

`

export const ConteinerHabits = styled.div`

    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;

`

export const HeadBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    p{
        font-family: 'Playball', cursive;
        font-size:39px;
        color:white;
        margin-left: 18px;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 18px;

    }

`
export const CreateHab = styled.div`
    height: 80px;
    width: 375px;
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
`

export const FormHab = styled.div`
    height: 180px;
    width: 340px;
    margin-left: 17px;
    border-radius: 3px;
    background-color: white;
`

export const ButtonsDays = styled.div`
    display:flex;
    height: 30px;
    width:235px;
    button{
        height: 30px;
        width: 30px;
        border-radius: 3px;
        border:1px solid #DBDBDB;
        cursor: pointer;
        color: #DBDBDB;
        background-color: white;
    }
`