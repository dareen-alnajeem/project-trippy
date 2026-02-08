import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'

export const Form = ({ title, inputs, textarea, submit, footer, link }) => {
    return (
        <form className='contact-form'>
            <h1>{title}</h1>

            {inputs?.map((input, index) => {
                return (
                    <input
                        key={index}
                        type="text"
                        placeholder={input}
                    />
                )
            })}

            {textarea && <textarea placeholder={textarea}></textarea>}

            <input type="submit" value={submit} className='button' />
            {footer && <p>{footer} <Link to={link.href}>{link.content}</Link></p>}

        </form>
    )
}
