import React from 'react'

const Button = ({ onClick, content }) => {
    return (
        <button onClick={onClick}>
            {content === "elimina" ? (
                <>
                    <i className="fa-solid fa-xmark"></i>
                    <span>{content}</span>
                </>
            ) : (
                <span>{content}</span>
            )}

        </button>
    )
}

export default Button
