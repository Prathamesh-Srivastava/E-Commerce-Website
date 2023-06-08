import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: -7px;
    height: 25px;
    background-color:#65a373;
    color: black;
    text-align: center;
`
export default function Announcement(){
    return(
        <Container>
            Super Deal!! 40% Discount upto Rs500 on selective products
        </Container>
    )
}