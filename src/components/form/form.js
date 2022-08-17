import axios from 'axios';
import React, { useReducer, useState } from 'react'
import Reducer, { add } from 'react';
import './form.scss';

const initialState = {
    history: []
}
function Form({ callApi, setData }) {
    const [method, setMethod] = useState('GET');
    const [history, dispatch] = useReducer(Reducer, initialState)

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method: method,
            url: e.target[0].value,
        };

        console.log(formData);
        console.log(history);

        callApi(formData);
        if (method === "GET" && formData.url) {
            axios.get(e.target[0].value)
                .then(res => {
                    const person = res.data;
                    setData(person)
                }).catch((e) => {
                    console.log(e);
                    setData("loading...")
                });
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className='p-3'>URL: </span>
                    <input name='url' type='text' />
                    <button className='btn btn-primary m-2'>GO!</button>
                    <label className='methods'>
                        <span id='get' onClick={() => setMethod('GET')}>GET</span>
                        <span id='post' onClick={() => setMethod('POST')}>POST</span>
                        <span id='put' onClick={() => setMethod('PUT')}>PUT</span>
                        <span id='delete' onClick={() => setMethod('DELETE')}>DELETE</span>
                    </label>
                </label>
                {
                    method === "POST" || method === "PUT" ? < input className='textArea container' type="text" placeholder='Enter Your Text' /> : null
                }
            </form>
        </>
    )
}

export default Form;