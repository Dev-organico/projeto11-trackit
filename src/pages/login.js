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
        navigate("/hoje")
        }).catch(() => alert("não foi"))
    }
   

    

    return (
        <Conteiner>
            <img src={logo} />
            <Form>
                <form onSubmit={sendForm}>
                    <input data-test="email-input" placeholder="e-mail" type="email" name="email" onChange={handleForm} value={form.email} />
                    <input  data-test="password-input" placeholder="senha" type="password" name="password" onChange={handleForm} value={form.password} />
                    <button data-test="login-btn" type="submit">Entrar</button>
                </form>
            </Form>
            <Link data-test="signup-link" to={"/cadastro"} style={{ textDecoration: 'none' }}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </Conteiner>
    )
}

