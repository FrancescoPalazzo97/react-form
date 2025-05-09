import React from 'react'

const Article = ({ article, handleDeleteElement }) => {

    const { id, title, description, author, date, tags } = article

    return (
        <div className="article-card" key={id}>
            <div className="article-title">
                <h2>{title}</h2>
            </div>
            <div className="article-body">
                <p>{description}</p>
                <p>{author}</p>
                <p>{date}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
                <button onClick={() => handleDeleteElement(id)}>
                    elimina
                </button>
            </div>
        </div>
    )
}

export default Article
