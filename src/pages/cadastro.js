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
                        <input placeholder="e-mail" type="email" name="email" onChange={handleForm} value={form.email} />
                        <input placeholder="senha" type="password" name="password" onChange={handleForm} value={form.password} />
                        <input placeholder="nome" type="text" name="name" onChange={handleForm} value={form.name} />
                        <input placeholder="imagem" type="text" name="image" onChange={handleForm} value={form.image} />
                        <button type="submit">Cadastrar</button>
                    </form>
                </Form>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>


            </Conteiner>
        )
    }