import { Conteiner, Form } from "../css/css";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../axios";

export default function Registration() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const navigate = useNavigate()

    console.log(form)

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function sendForm(event){
        event.preventDefault();

        axios.post(`${URL}auth/sign-up`,form).then(()=>navigate("/")).catch(()=>alert("não foi"))

    }


        return (
            <Conteiner>
                <img src={logo} />
                <Form >
                    <form onSubmit={sendForm}>
                        <input data-test="email-input" placeholder="e-mail" type="email" name="email" onChange={handleForm} value={form.email} />
                        <input data-test="password-input" placeholder="senha" type="password" name="password" onChange={handleForm} value={form.password} />
                        <input data-test="user-name-input" placeholder="nome" type="text" name="name" onChange={handleForm} value={form.name} />
                        <input data-test="user-image-input" placeholder="imagem" type="text" name="image" onChange={handleForm} value={form.image} />
                        <button  data-test="signup-btn" type="submit">Cadastrar</button>
                    </form>
                </Form>
                <Link data-test="login-link" to={"/"} style={{ textDecoration: 'none' }}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>


            </Conteiner>
        )
    }