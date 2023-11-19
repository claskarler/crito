import React from 'react'
import { useState } from 'react'

const Message = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value))
                break
        }
    }

    const validateLength = (value, minLength=1) => {
        if (value.length < minLength)
            return true
        return false
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setErrorMessage('')

        for (let element of e.target) {
            switch (element.name) {
                case 'name':
                    setName(element.value)
                    setNameError(validateLength(element.value))
                    break
                case 'email':
                    setEmail(element.value)
                    setEmailError(validateLength(element.value))
                    break
                case 'message':
                    setMessage(element.value)
                    setMessageError(validateLength(element.value))
                    break
            }
        }

        const contactForm = {name, email, message}
        const json = JSON.stringify(contactForm)
        
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        switch (result.status) {
            case 200:
                clearForm()
                alert('Message sent')
                break
            case 201:
                clearForm()
                alert('Message sent')
                break
            case 400:
                setErrorMessage(`Something went wrong, please check your answers` )
                break
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

  return (
    <section className="message">
        <div className="container">
            <div className="section-title">
                <h2>Leave us a message for any information.</h2>
            </div>
            <div className="message-input">
                <form onSubmit={handleSubmit}>
                    <p className='errorMessage'>{errorMessage}</p>
                    <input 
                        className={` ${nameError ? 'error' : ''}`} type="name" 
                        placeholder= {` ${nameError ? 'Please provide a name' : 'Name*'}`} value={name} name="name" 
                        onChange={(e)=> handleChange(e)}/>
                    <input 
                        className={` ${emailError ? 'error' : ''}`}type="email" 
                        placeholder={`${emailError ? 'Please provide a valid email adress' : 'Email*'}`} value={email} name="email" 
                        onChange={(e)=> handleChange(e)}/>
                    <input 
                    className={` ${messageError ? 'error' : ''}`}type="text" id="text" 
                        placeholder={`${messageError ? 'Please write a message' : 'Your Message*'}`} value={message} name="message" 
                        onChange={(e)=> handleChange(e)}/>
                    <button className="btn-yellow"><span>Send Message<i className="fa-regular fa-arrow-up-right"></i></span></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Message