import React from 'react'

const Article = ({ article, handleDeleteElement }) => {

    const { id, title, description, author } = article

    return (
        <div className="article-card d-flex d-column" key={id}>
            <div className="article-title">
                <h2>{title}</h2>
            </div>
            <div className="article-body">
                <p>{description}</p>
                <cite>{author}</cite>
                <button onClick={() => handleDeleteElement(id)}>
                    <i class="fa-solid fa-xmark"></i><span>elimina</span>
                </button>
            </div>
        </div>
    )
}

export default Article
