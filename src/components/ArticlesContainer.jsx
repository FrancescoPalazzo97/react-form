import React from 'react'

const ArticlesContainer = ({ articles, handleDeleteElement }) => {
    return (
        <div className="articles-container">
            {articles.map((article) => (
                <div className="article-card" key={article.id}>
                    <div className="article-title">
                        <h2>{article.title}</h2>
                    </div>
                    <div className="article-body">
                        <p>{article.description}</p>
                        <p>{article.author}</p>
                        <p>{article.date}</p>
                        <div className="tags">
                            {article.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <button onClick={() => handleDeleteElement(article.id)}>
                            elimina
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticlesContainer
