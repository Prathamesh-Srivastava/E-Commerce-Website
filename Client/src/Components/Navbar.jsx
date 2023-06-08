import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";


const Container = styled.div`
    height: fit-content;
`

const InnerCont = styled.div`
    display: flex;
    align-items: center;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    flex:1;
`

const Lang = styled.span`
    font-size: 18px;
    cursor:pointer;
`

const SearchCont = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    margin-left: 30px;
`

const Input = styled.input`
    border:1px solid black;
    height:30px;
`

const Center = styled.div`
    text-align: center;
    flex:1;
`

const Name = styled.h1`
    font-weigth: bold;
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    display:flex;
    font-size: 18px;
    margin: 20px;
    cursor: pointer;
`

const Badge = styled.div`
width:1vw;
height:-1vh;
background-color:blue;
border-radius:20px;
color:white;
padding-left:4.5px;
font-size:15px;
`
export default function Navbar(){
    const cartCount = useSelector(state=>state.cart.quantity)

    return(
        <Container>
            <InnerCont>
                <Left><Lang>ENG</Lang>
                <SearchCont>
                <Input placeholder = "Search Here" />
                </SearchCont>
                </Left>
                <Center><Name>E-Baazar.</Name></Center>
                <Right>
                    <Link to="/register" style={{ textDecoration: 'none', color: "black"}}>
                    <MenuItem>Register</MenuItem></Link>

                    <Link to="/login" style={{ textDecoration: 'none', color: "black"}}>
                    <MenuItem>SignIn</MenuItem></Link>

                    <Link to="/cart" style={{ textDecoration: 'none', color: "black"}}>
                    <MenuItem>Cart <Badge>{cartCount}</Badge></MenuItem></Link>
                </Right>
            </InnerCont>
        </Container>
    )
}