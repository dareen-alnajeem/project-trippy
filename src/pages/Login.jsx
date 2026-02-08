import React from 'react'
import { Form } from "../component/Form/Form"
import Hero from '../component/Hero/hero'

const Login = () => {
    return (
        <>
            <Hero
                image="/assets/img/login.jpg"
                title="Log In"
            />

            <Form
                title="Log in my account"
                inputs={["Your Email", "passward", "Repeat Your Passward"]}
                submit="Log in"

            />
        </>
    )
}

export default Login