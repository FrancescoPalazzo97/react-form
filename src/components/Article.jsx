import React from 'react'
import Button from './Button'

const Article = ({ article, handleDeleteElement }) => {

    const { id, title, description, author } = article

    return (
        <div className="article-card d-flex d-column">
            <div className="article-title">
                <h2>{title}</h2>
            </div>
            <div className="article-body">
                <p>{description}</p>
                <cite>{author}</cite>
                <Button onClick={() => handleDeleteElement(id)} content={`elimina`} />
            </div>
        </div>
    )
}

export default Article
