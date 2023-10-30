import { Link, useParams } from "react-router-dom"

const ArticleGenre=()=>{
    return(
        <div>
            <Link to={`/api/articles?category=coding`}><h1>Coding</h1></Link>
            <Link to={`/api/articles?category=football`}><h1>Football</h1></Link>
            <Link to={`/api/articles?category=cooking`}><h1>Cooking</h1></Link>
        </div>
            
    )
}

export default ArticleGenre
