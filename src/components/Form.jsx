import React from 'react'
import { useState } from 'react';

const Form = ({ newArticle, setNewArticle, addArticle }) => {

    return (
        <div className="form-container">
            <form onSubmit={addArticle}>
                <input
                    type="text"
                    placeholder="Inserisci titolo"
                    value={newArticle}
                    onChange={(e) => setNewArticle(e.target.value)}
                />
                <button>invia</button>
            </form>
        </div>
    )
}

export default Form
