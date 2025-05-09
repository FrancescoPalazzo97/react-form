import React from 'react'
import Article from './Article'

const ArticlesContainer = ({ articles, handleDeleteElement }) => {

    return (
        <div className="articles-container">
            {articles.map((article) => (
                <Article article={article} handleDeleteElement={handleDeleteElement} />
            ))}
        </div>
    )
}

export default ArticlesContainer
