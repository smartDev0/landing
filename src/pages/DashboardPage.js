
import React from "react";
import Accessories from "../components/Accesorries";
import ContactForm from "../components/ContactForm";
import Favorite from "../components/Favorite";
import Hero from "../components/Hero";
import Product from "../components/Product";


const DashboardPage = () => {
    return (
        <>
            <Hero />
            <Accessories />
            <Product />
            <Favorite />
            <ContactForm />
        </>
    )


}

export default DashboardPage