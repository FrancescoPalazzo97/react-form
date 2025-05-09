import React from 'react'
import Button from './Button.jsx';

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
                <Button content={`invia`} />
            </form>
        </div>
    )
}

export default Form
