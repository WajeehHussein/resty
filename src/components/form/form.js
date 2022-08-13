import React, { useState } from 'react'

import './form.scss';

function Form(props) {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    let handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method: method,
            url: url,
        };
        props.handleApiCall(formData);
    }
    let changeMethode = e => {
        setMethod(e.target.id)
    }
    let urlFunction = e => {
        setUrl(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className='p-3'>URL: </span>
                    <input name='url' type='text' placeholder='Http://localhost:3000' onChange={urlFunction} />
                    <button className='btn btn-primary m-2'>GO!</button>
                    <label className='methods'>
                        <span id='GET' onClick={changeMethode}>GET</span>
                        <span id='POST' onClick={changeMethode}>POST</span>
                        <span id='PUT' onClick={changeMethode}>PUT</span>
                        <span id='DELETE' onClick={changeMethode}>DELETE</span>
                    </label>
                </label>
            </form>
        </>
    )
}

export default Form;