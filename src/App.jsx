import articles from './assets/articles'
import { useState } from 'react'

function App() {

  const [newArticle, setNewArticle] = useState("")

  return (
    <>

      <header>
        <div className="container">
          <h1>React Form</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <form>
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
                <div className="tags">
                  {article.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main >

    </>
  )
}

export default App
