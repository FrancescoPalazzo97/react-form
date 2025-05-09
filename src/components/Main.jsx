import React from 'react'
import initialArticles from '../assets/articles.js';
import { useState } from 'react';
import Form from './Form.jsx';
import ArticlesContainer from './ArticlesContainer.jsx';

const Main = () => {
    const [newArticle, setNewArticle] = useState("");
    const [articles, setArticles] = useState(initialArticles);

    const addArticle = (e) => {
        e.preventDefault();
        const newArticleObj = {
            id: articles.length === 0 ? 1 : articles[articles.length - 1].id + 1,
            title: newArticle,
            description: "Descrizione dell'articolo",
            author: 'Autore dell\'articolo',
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
            <div className="container d-flex j-center wrap">
                <Form
                    newArticle={newArticle}
                    setNewArticle={setNewArticle}
                    addArticle={addArticle}
                />
                <ArticlesContainer
                    articles={articles}
                    handleDeleteElement={handleDeleteElement}
                />
            </div>
        </main>
    )
}

export default Main
