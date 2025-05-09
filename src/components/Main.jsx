import React from 'react'
import initialArticles from '../assets/articles.js';
import { useState } from 'react';
import Form from './Form.jsx';

const Main = () => {
    const [newArticle, setNewArticle] = useState("");
    const [articles, setArticles] = useState(initialArticles);

    const addArticle = (e) => {
        e.preventDefault();
        const newArticleObj = {
            id: articles.length === 0 ? 1 : articles[articles.length - 1].id + 1,
            title: newArticle,
            description: "Descrizione dell'articolo",
            author: 'Giulia Neri',
            date: '2025-04-28',
            tags: ['Xbox', 'Game Pass', 'Recensioni']
        };
        setArticles([...articles, newArticleObj]);
        setNewArticle("");
    };

    const handleDeleteElement = (id) => {
        const filteredArticles = articles.filter(article => article.id !== id);
        setArticles(filteredArticles);
    };
    return (
        <main>
            <div className="container">
                <Form
                    newArticle={newArticle}
                    setNewArticle={setNewArticle}
                    addArticle={addArticle}
                />
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
            </div>
        </main>
    )
}

export default Main
