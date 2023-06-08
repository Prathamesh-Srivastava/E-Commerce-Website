import React from "react";
import styled from "styled-components";
import {Categories} from "../Data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
export default function categories(){
    return(
        <Container>
            {Categories.map(item=>(
                <CategoryItem item={item} />
            ))}
        </Container>
    )
}