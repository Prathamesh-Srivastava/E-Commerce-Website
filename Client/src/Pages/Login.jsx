import React, { useState } from "react";
import styled from "styled-components";
import background from "../Images/login_background.avif";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../redux/apiCalls";
import Home from "./HomePage";

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
border:1px solid black;
border-radius: 30px;
background-color: white;
margin-top:180px;
width:40vw;
height:60vh;
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

const A = styled.a`
margin-top:10px;
cursor: pointer`

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
&:disabled{
    color: black;
    cursor: not-allowed;
}
`
const Error = styled.div`
color:red;
margin-top:10px;
`

export default function Login(){
    const [username,setUsername] = useState({});
    const [password,setpassword] = useState({});
    const dispatch = useDispatch();
    const {success, isFetching, error} = useSelector((state)=> state.user);

    const handleClick = async (e)=>{
        e.preventDefault();
        await login(dispatch,{username,password});
    }

    if(success){
        return <Home />;
    }
    
    return (
        <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></Input>
                <Input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}></Input>
            </Form>
            <Button onClick={handleClick} disabled={isFetching}>Login</Button>
            {error && <Error>Something went wrong....</Error>}
            <A>Forgot Password?</A>
            <Link to="/register" style={{textDecoration:"none", color:"black"}}><A>Create New account</A></Link>
        </Wrapper>
    </Container>
    )
}