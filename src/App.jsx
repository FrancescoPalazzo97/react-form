import initialArticles from './assets/articles.js'
import { useState } from 'react'

function App() {

  const [newArticle, setNewArticle] = useState("")
  const [articles, setArticles] = useState(initialArticles)

  const addArticle = (e) => {
    e.preventDefault()
    console.log(`Nuovo articolo: ${newArticle}`)

    const newArticleObj = {
      id: articles[articles.length - 1].id + 1,
      title: newArticle,
      description: "Descrizione dell'articolo",
      author: 'Giulia Neri',
      date: '2025-04-28',
      tags: ['Xbox', 'Game Pass', 'Recensioni']
    }

    setArticles([...articles, newArticleObj])
    setNewArticle("")
  }

  return (
    <>

      <header>
        <div className="container">
          <h1>React Form</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <form onSubmit={addArticle}>
            <div className="form-container d-flex j-center">
              <input
                type="text"
                placeholder="Inserisci titolo"
                value={newArticle}
                onChange={e => setNewArticle(e.target.value)} />
              <button>invia</button>
            </div>
          </form>
          <div className="articles-container">
            {articles.map(article => (
              <div className="article-card" key={article.id}>
                <div className="article-title">
                  <h2>{article.title}</h2>
                </div>
                <p>{article.description}</p>
                <p>{article.author}</p>
                <p>{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main >

    </>
  )
}

export default App
