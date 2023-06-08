import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Container  = styled.div``

const Heading = styled.div`
text-align:center;`

const Top = styled.div`
margin-top:10px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Button = styled.button`
height:45px;
background:transparent;
cursor: pointer;`
const CartOptions = styled.div`
display: flex;
font-size:17px;
`
const Option = styled.span`
margin: 10px;
cursor: pointer;
`
const Bottom = styled.div`
margin-top: 30px;
display:flex;
`

const Product = styled.div`
margin-top: 30px;
display:flex;
justify-content:space-between;
`

const Info = styled.div`
flex:3;
padding-left:20px;
margin-right:40px;
`

const Image = styled.img`
height:25vh;
width: 15vw;`
const Details = styled.div`
padding:10px;
margin-left:40px;
`
const DetailHead = styled.span`
font-weight: bold;`
const Detail = styled.div`
margin-bottom:10px;
display:flex;
align-items: center;`
const Color = styled.div`
cursor: pointer;
margin-left:10px;
width:20px;
height:20px;
border-radius:100px;
border:1px solid black;
background-color: ${props => props.clr}`
const PriceDetails = styled.div``

const Quantity = styled.div`
margin-left:200px;
display:flex;
flex-direction: column;
align-items:center;
`
const Amount = styled.span`
border:1px solid black;
border-radius:20px;
width:50px;
text-align:center;
`
const PlusMin  = styled.span`
font-size:40px;
cursor:pointer;
`
const Price = styled.span`
font-size: 30px;`

const Summary = styled.div`
margin-top:80px;
flex:1;
padding:3px;
border: 3px solid black;
border-radius: 50px;
margin-right: 20px;
width:25%;
text-align: center;
height:58.5vh;`
const Title = styled.h1`
margin-bottom:50px;`
const TotalDetails = styled.div``
const Division = styled.div`
margin-bottom:30px;
display:flex;
justify-content:space-between;
`
const Text = styled.span`
padding-left:15px`
const Value = styled.span`
padding-right:15px;`

const Total = styled.div`
margin:15px;
font-size:30px;
display:flex;
justify-content: space-between;
`
const TotalText = styled.span`
`
const TotalValue = styled.span``
const Checkout = styled.button`
width:100%;
height:7vh;
border-radius:15px;
background-color:black;
color:white;
font-size:20px;
cursor:pointer;
&:hover{
    background-color:grey;
    color:black;
}`



export default function Cart(){
    const cart = useSelector(state=>state.cart);
    const navigate = useNavigate();
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Heading><h1>YOUR CART</h1></Heading>
            <Top>
                <Button onClick={(e)=>{ navigate("/")}}>CONTINUE SHOPPING</Button>
                <CartOptions>
                    <Option><u>Your Cart({cart.quantity})</u></Option>
                    <Option><u>Your Wishlist(0)</u></Option>
                </CartOptions>
                <Button onClick={(e)=>{ navigate("/checkout")}}>CHECKOUT</Button>    
            </Top>
            <Bottom>
                <Info>{
                    cart.products.map(product =>(
                    <Product>
                    <Image src={product.img} alt=""/>
                    <Details>
                        <Detail><DetailHead>PRODUCT NAME:</DetailHead>{product.title}</Detail>
                        <Detail><DetailHead>ID:</DetailHead>{product._id}</Detail>
                        <Detail><DetailHead>COLOR</DetailHead><Color clr = {product.color}></Color></Detail>
                        <Detail><DetailHead>SIZE:</DetailHead>{product.size}</Detail>
                    </Details>
                    <PriceDetails>
                    <Quantity>
                            <PlusMin>+</PlusMin>
                            <Amount>{product.amount}</Amount>
                            <PlusMin>-</PlusMin>
                            <Price>Rs {product.price*product.amount}</Price>
                    </Quantity>
                    </PriceDetails>
                    </Product>
                    ))}
                    <hr></hr>
                    </Info>
                <Summary>
                    <Title>ORDER SUMMARY</Title>
                    <TotalDetails>
                        <Division>
                            <Text>Subtotal</Text>
                            <Value>Rs {cart.total}</Value>
                        </Division>
                        <Division>
                            <Text>Shipping Cost</Text>
                            <Value>Rs 80</Value>
                        </Division>
                        <Division>
                            <Text>Shipping Discount</Text>
                            <Value>-Rs 100</Value>
                        </Division>
                        <Division>
                            <Text>Taxes</Text>
                            <Value>Rs 20</Value>
                        </Division>
                    </TotalDetails>
                    <Total><TotalText>Total</TotalText><TotalValue>Rs {cart.total}</TotalValue></Total>
                    <Link to="/checkout">
                        <Checkout>PROCEED TO PAY</Checkout>
                    </Link>
                </Summary>
            </Bottom>
            <Footer />
        </Container>
    )
}