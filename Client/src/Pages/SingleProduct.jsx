import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import {useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
const Container = styled.div``
const Wrapper = styled.div`
display: flex;
margin-bottom:60px;
`
const ImageCont = styled.div`
flex:1`
const Info = styled.div`
flex:1;
`
const Image = styled.img`
width:70%;
height:80%;
padding:60px;
align-items: center;
`
const Title = styled.h1``
const Desc = styled.div`
margin:50px;
margin-left:0;
margin-right:0;
font-size:17px`
const Price = styled.span`
font-size:40px;
`

const FilterContainer = styled.div`
display:flex;
margin-top:50px;`
const ColorFilter = styled.div`
display:flex;
`
const Color = styled.div`
cursor: pointer;
width:20px;
height:20px;
margin-left:3px;
border-radius:100px;
border:1px solid black;
background-color: ${props=> props.color}`
const FilterTitle = styled.span``
const FilterSize = styled.select`
padding-left:10px;
height: 40px;
cursor: pointer;
margin-left:200px;
width:100px;
`

const Size = styled.option``

const AddContainer = styled.div`
display:flex;
margin-top:100px;`
const AmountCont = styled.div`
margin-right:100px;
display:flex;
align-items:center;`
const Amount = styled.span`
font-size: 30px;
border:1px solid black;
border-radius:20px;
width:70px;
text-align:center;
margin-left:10px;
margin-right:10px;`
const PlusMin  = styled.button`
font-size:40px;
cursor:pointer;
background: transparent;
border: none;
`
const Button = styled.button`
width:100px;
background: transparent;
cursor:pointer;
`


export default function SingleProduct(){
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});

    const [amount,setAmount] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");

    const dispatch = useDispatch();

    const handleAmount = (type) =>{
        if(type === "Dec")
        amount>1 && setAmount(prevAmount => prevAmount-1);

        else
        setAmount(prevAmount=> prevAmount+1);
    }

    useEffect(()=>{
        const getProduct = async()=>{
            try {
                const res = await axios.get(`https://ecommerce-server-k26h.onrender.com/api/products/find/${id}`);
                setProduct(res.data);
            } catch (error) {
            }
        }
        getProduct();
    },[id]);

    const handleClick = ()=>{
        dispatch(addProduct({...product,amount,color,size}));
        console.log(color+" "+size);
    }

//price: product.price*amount
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageCont>
                    <Image src={product.img} alt="" />
                </ImageCont>
                <Info>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>Rs {product.price}</Price>
                    <FilterContainer>
                        <FilterTitle>Colors:</FilterTitle>
                        <ColorFilter>
                        {product.color && (product.color).map((c)=>(
                                <Color color={c} key={c} onClick={()=>setColor(c)}/>
                            ))}
                        </ColorFilter>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            <Size disabled selected>Size</Size>
                            {product.size && (product.size).map((s)=>{
                                return <Size>{s}</Size>
                            })}
                        </FilterSize>
                    </FilterContainer>
                    <AddContainer>
                        <AmountCont>
                            <PlusMin onClick={()=> handleAmount("Dec")}>-</PlusMin>
                            <Amount>{amount}</Amount>
                            <PlusMin onClick={()=> handleAmount("Inc")}>+</PlusMin>
                        </AmountCont>
                        <Button onClick={handleClick}>Add to Cart</Button>
                    </AddContainer>
                </Info>
            </Wrapper>
            <Footer />
        </Container>
    )
}