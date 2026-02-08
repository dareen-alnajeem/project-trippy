import React from 'react'
import "./AboutContent.css";


export const AboutContent = ({ title, description }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>

    )
}
export default AboutContent