import React from "react";
import styled from "styled-components";

import facebook from "../Images/Facebook-logo-removebg-preview.png";
import insta from "../Images/insta-icon-removebg-preview.png"
import twitter from "../Images/twitter-logo-removebg-preview.png"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p``
const IconCont = styled.div`
display:flex;
justify-content: spaced-between;
`
const Social = styled.div`
cursor:pointer;
`

const Center = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
margin:10px;
width:40%
`

const Right = styled.div`
flex:1;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`





export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>E-Bazaar.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum ipsam ut laborum ab natus eveniet illo repellendus 
                    deserunt excepturi fugit Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Fugit, architecto?</Desc>
                <IconCont>
                    <Social><img className="social" src={facebook} alt=""/></Social>
                    <Social><img className="social" src={insta} alt=""/></Social>
                    <Social><img className="social" src={twitter} alt="" /></Social>
                </IconCont>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem>Dixie Path, South Street Mumbai 78936</ContactItem>
                <ContactItem>+91 9876543210</ContactItem>
                <ContactItem>info@ebazar.com</ContactItem>
            </Right>
        </Container>
    )
}