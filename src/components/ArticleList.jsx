import { useState, useEffect } from "react"
import { getArticles } from "../utils/api"

const ArticleList= () => {
  
    const [articles, setArticles] = useState([])
    

    useEffect(()=>{
        getArticles().then((fetchedArticles)=>{
            setArticles(fetchedArticles)
        })
    }, [])

    return (
        <div>
            
            <h1>Article List</h1>
            <ul className="article_list">
                {articles.map(({title, topic, author, article_id, article_img_url})=>
                    <li className = 'item-card' key = {article_id}>
                        <h2>{title}</h2>
                        <img src={article_img_url} alt={`Image of ${title}`}></img>
                        <p>{topic}</p>
                        <p>{author}</p>

                    </li>
                )
                    
                }
            </ul>
        </div>

    )
}


export default ArticleList