import React, { useState } from "react";
import styled from "styled-components";
import left from "../Images/leftArrow.png"
import right from "../Images/rightArrow.png"
import { sliderItems } from "../Data";

const Container = styled.div`
    display: flex;
    height:100vh;
    position: relative;
    overflow: hidden;
    margin-bottom:40px;
`
const Arrow = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
    cursor: pointer;
`

const Wrapper  = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.index*-100}vw);
`

const Slide = styled.div`
    height:100vh;
    width:100vw;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}   
`
const ImageCont = styled.div`
    flex:1;
    height: 100%;
    background-color:white;
    padding: 60px;
`

const Image = styled.img`
    height: 100%;
    width :100%
`
const InfoCont = styled.div`
    flex:1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    background: transparent;
    height: 60px;
    width: 130px;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        background-color:#bdbdbd;
        color:black;
    }
`

export default function Slider(){
    const [index, setIndex] = useState(0);
    const handledClick = (direction) =>{
        if(direction === 'left'){
            setIndex(index > 0 ? index-1:3);
        }
        if(direction === 'right'){
            setIndex(index < 3 ? index+1:0);
        }
}

    return(
        <Container>
            <Arrow direction="left" onClick={()=> handledClick("left")}>
                <img src={left} alt="left arrow"/>
            </Arrow>
            <Wrapper index={index}>
                {sliderItems.map((item)=> (
                    <Slide bg={item.bg}>
                    <ImageCont>
                        <Image src={item.img} alt="Image Not Found" />
                    </ImageCont>
                    <InfoCont>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoCont>   
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handledClick("right")}>
                <img src={right} alt="right arrow" />
            </Arrow>
        </Container>
    )
}