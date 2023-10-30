import { useState, useEffect } from "react"
import { getArticles } from "../utils/api"
import { Link, useParams ,useSearchParams} from "react-router-dom"


const ArticleList= () => {
    const [searchParams, setSearchParams] = useSearchParams()  
    const category = searchParams.get("category")

    const [articles, setArticles] = useState([])
 


    useEffect(()=>{
        console.log(category)
        getArticles().then((fetchedArticles)=>{
            if(category){
                fetchedArticles=fetchedArticles.filter((article)=>{{
                    return article.topic===category
                }})
            }
            setArticles(fetchedArticles)
        })
    }, [category])
//need to change line 24 to the right
    return (
        <div>
            <h1>Article List</h1>
            <ul className="article_list">
                {articles.map(({title, topic, author, article_id, article_img_url})=>
                    <li className = 'item-card' key = {article_id}>
                        <h2>{title}</h2>
                        <Link to={`/api/articles/${article_id}`}><img src={article_img_url} alt={`Image of ${title}`}></img></Link>
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