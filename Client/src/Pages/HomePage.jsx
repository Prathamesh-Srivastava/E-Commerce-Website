import React from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import ProductCatalog from "../Components/ProductCatlog";
import Footer from "../Components/Footer";
export default function Home(){
    return(
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <ProductCatalog />
            <Footer />
        </div>
    )
}