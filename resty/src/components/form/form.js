import React from 'react'

import './form.scss';

function Form(props) {
    let handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon',
        };
        props.handleApiCall(formData);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>URL: </span>
                    <input name='url' type='text' placeholder='Http://localhost:3000' />
                    <button >GO!</button>
                    <label className='methods'>
                        <span id='get'>GET</span>
                        <span id='post'>POST</span>
                        <span id='put'>PUT</span>
                        <span id='delete'>DELETE</span>
                    </label>
                </label>
            </form>
        </>
    )
}

export default Form;