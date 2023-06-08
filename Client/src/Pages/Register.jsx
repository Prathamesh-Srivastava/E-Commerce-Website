import React, { useState } from "react";
import styled from "styled-components";
import background from "../Images/background.jpg";
import { register } from "../redux/apiCalls";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width:100vw;
height:100vh;
background: url(${background});
background-repeat: no-repeat;
background-size: cover;
display:flex;
justify-content:center;
`
const Title = styled.h1``
const Wrapper = styled.div`
border: 1px solid black;
border-radius:60px;
background-color: white;
margin-top:100px;
width:40vw;
height:65vh;
text-align : center;
display:flex;
flex-direction:column;
align-items:center;
`
const Form = styled.form`
display:flex;
flex-direction: column;
align-items:center;`
const Input = styled.input`
margin-top:10px;
height:7vh;
width: 30vw;`
const Text = styled.span`
margin-top:30px;`
const Button = styled.button`
cursor:pointer;
margin-top:10px;
width: 30vw;
height:7vh;
background-color:black;
color:white;
&:hover{
    background-color:grey;
    color: black;
}
`

export default function Register(){
    const [input, setInput] = useState({});
    const dispatch = useDispatch();

    const navigate = useNavigate(); 

    const handleChange = (e) =>{
        setInput(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const handleClick = (e) =>{
        e.preventDefault();
        register(dispatch,input);
        navigate(`/login`);
    }

    return (
        <Container>
        <Wrapper>
            <Title>CREATE NEW ACCOUNT</Title>
            <Form>
                <Input name="username" type="text" placeholder="Username" onChange={handleChange}></Input>
                <Input name="email" type="text" placeholder="E-mail" onChange={handleChange}></Input>
                <Input name="password" type="password" placeholder="Password" onChange={handleChange}></Input>
            </Form>
            <Text>By creating an account, I consent to the processing of my 
                personal data in accordance with the <b>PRIVACY POLICY</b></Text>
            <Button onClick={handleClick}>CREATE ACCOUNT</Button>
        </Wrapper>
    </Container>
    )
}