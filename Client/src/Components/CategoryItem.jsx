import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    flex:1;
    margin:6px;
    border: 1px solid black;
    position: relative;
    height:80vh;
`
const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
    opacity: 0.7;
`
const InfoCont = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    margin: 20px;
    color: Black;
    font-size:50px;
`
const Button = styled.button`
    border: none;
    height: 40px;
    cursor: pointer;
    font-weight: 200px;
    font-size: 20px;
    background-color:white;
    border: 1px solid black;
    border-radius:10px;
`
export default function CategoryItem({item}){
    return(
        <Container>
            <Image src={item.img} />
            <InfoCont>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.cat}`}>
                <Button>SHOP NOW</Button>
                </Link>
            </InfoCont>
        </Container>
    )
}