import React from "react";
import styled from "styled-components";
import cart from "../Images/cart.png";
import like from "../Images/like.png";
import search from "../Images/search.png";
import {Link} from "react-router-dom"


const Info = styled.div`
    opacity:0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
    top:0;
    left:0;
    transition: all 0.5s ease;
    background-color:rgba(0,0,0,0.2);
`

const Container = styled.div`
    flex:1;
    margin:20px;
    min-width:280px;
    max-width: 422px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover ${Info}{
        opacity:1;
    }
`
const Image = styled.img`
    height: 75%;
    width: 80%;
`

const Icon = styled.img`
    width: 3vw;
    height: 6vh;
    margin-top:9px;
    border-radius: 100px;
    background-color:white;
    margin:5px;
    &:hover{
        background-color:grey;
        transform: scale(1.1);
    }
`
export default function Product({item}){
    return (
        <Container>
            <Image src={item.img}></Image>
            <Info>
                <Icon src={cart} alt=""/>
                <Link to ={`/product/${item._id}`} ><Icon src={search} alt=""/></Link>
                <Icon src={like} alt=""/>
            </Info>
        </Container>
    )
}