import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
`

export default function ProductCatalog({cat,filters,sort}){
    const [Products,setProducts] = useState([]);
    const [FilteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
                const res = await axios.get(
                    cat ? `https://ecommerce-server-k26h.onrender.com/api/products?category=${cat}`
                        : "https://ecommerce-server-k26h.onrender.com/api/products"
                    );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);

    useEffect (()=>{
        cat && setFilteredProducts(
            Products.filter((item)=>
            Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
            )
            )
        );
    },[Products,cat,filters]);

    useEffect (()=>{
        if(sort==="asc"){
            setFilteredProducts((prev)=>
            [...prev].sort((a,b)=> a.price-b.price));
        }
        else{
            setFilteredProducts((prev)=>
            [...prev].sort((a,b)=> b.price-a.price));
        }
    },[sort]);

    return (
        <Container>
            {cat 
                ? FilteredProducts.map((item) =>
                <Product item={item} key={item.id}/>)
                : Products.map((item)=> <Product item={item} key={item.id}/>)
            }
        </Container>
    )
}