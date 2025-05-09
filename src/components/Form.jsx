import React from 'react'
import { useState } from 'react';

const Form = ({ newArticle, setNewArticle, addArticle }) => {

    return (
        <form onSubmit={addArticle}>
            <div className="form-container d-flex j-center">
                <input
                    type="text"
                    placeholder="Inserisci titolo"
                    value={newArticle}
                    onChange={(e) => setNewArticle(e.target.value)}
                />
                <button>invia</button>
            </div>
        </form>
    )
}

export default Form
