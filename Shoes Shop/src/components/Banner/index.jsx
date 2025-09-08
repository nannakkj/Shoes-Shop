import React from "react";
import banner from "../../assets/banner.jpg"
import banner_mobile from "../../assets/banner_mobile.jpg"
import './Banner.css'

export default function Banner(){
    const Ismobile = window.innerWidth <= 700
    return (
        <section
            className="section_cape"
            style={{
                backgroundImage: `url(${Ismobile ? banner_mobile : banner})`,
            }}
        >
            <div className="text">
                <h2>Preview</h2>
                <h1>VERÃO</h1>
                <button className="btn">Buy Now</button>
            </div>
        </section>
    )
}