import React from "react";
import styled from "styled-components";
import check from "../Images/check_mark.png"
import {Link} from "react-router-dom"

const Container = styled.div`
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 50px;`
const Heading = styled.h1`
    color: #333333;
    font-size: 28px;
    margin-bottom: 20px;`
const Image = styled.img`
    height: 40vh;
    width:30vw;`
const Content = styled.p`
    color: #666666;
    font-size: 18px;
    margin-bottom: 30px;`
const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    &:hover{
        background-color:green;
        color:black;
    }
`

export default function Payment(){
    return(
        <Container>
            <Image src={check}></Image>
            <Heading>Payment Successful</Heading>
            <Content>Thank you for your payment. Your transaction has been successfully processed.</Content>
            <Link to="/">
            <Button>Continue Shopping</Button>
            </Link>
        </Container>
    )
}