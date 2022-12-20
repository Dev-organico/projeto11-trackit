import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../assets/logo.png"
import { Conteiner, Form } from "../css/css";
import { URL } from "../axios";



export default function Login({setForm,form,setApiForm}) {

    const navigate = useNavigate()

    

  
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function sendForm(event) {
        event.preventDefault();
        axios.post(`${URL}auth/login`, form).then((el) => {
        setApiForm(el.data)
        navigate("/habitos")
        }).catch(() => alert("não foi"))
    }
   

    

    return (
        <Conteiner>
            <img src={logo} />
            <Form>
                <form onSubmit={sendForm}>
                    <input placeholder="e-mail" type="email" name="email" onChange={handleForm} value={form.email} />
                    <input placeholder="senha" type="password" name="password" onChange={handleForm} value={form.password} />
                    <button type="submit">Entrar</button>
                </form>
            </Form>
            <Link to={"/cadastro"} style={{ textDecoration: 'none' }}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </Conteiner>
    )
}

