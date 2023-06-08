import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import ProductCatalog from "../Components/ProductCatlog";
import Footer from "../Components/Footer";
import styled from "styled-components";

import {useLocation} from "react-router-dom";

const Container = styled.div`

`
const Title = styled.h1``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div``
const FilterText = styled.span``

const Select = styled.select`
margin: 3px;
width: 120px;
height: 35px;
padding-left:15px`
const Option = styled.option``


export default function ProductList(){
    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState();
    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters} >
                        <Option disabled selected >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                        <Option>Brown</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled selected >Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                    </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option disabled selected>Price</Option>
                    <Option value="asc">Price(lower to higher)</Option>
                    <Option value="desc">Price(higher to lower)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <ProductCatalog cat={cat} filters={filters} sort={sort} />
            <Footer />
        </Container>

    )
}