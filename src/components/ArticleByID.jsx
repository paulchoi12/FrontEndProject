import { getArticlesByID, getCommentsByID,postComments,updateVotes } from "../utils/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router"




 const Article = () =>{
    const {article_id} = useParams()

    //STATES
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [articleVote, setArticleVote]= useState(0)
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const [isError, setIsError] = useState(false)
    //COMMENTS

    function votesSorter(a, b){
        return b.votes - a.votes
    }
    const upVote =(e) =>{
        
       return e.target.value++
    }
    const downVote =(e)=>{
        
        return e.target.value--
    }

    //UPDATE ARTICLE VOTES
    const updateArticleVote =(value) =>{
        // UI updates
         setArticleVote((currentVote)=>{
             return currentVote + value;
             
        })
         // API updates
        return updateVotes(article_id, value).catch(()=>{
            setArticleVote(0)
            
        });
    }
       
   //POST COMMENT
   const handleSubmit  = (e) =>{
    e.preventDefault()
    setAuthor('')
    setBody('')
    const userInput = {
        username: e.target[0].value,
        body: e.target[1].value,
    }

    if(e.target[1].value && e.target[0].value){
        postComments(article_id, userInput)
        .then((response)=> {
        setIsError(false)
                setComments((currentComments)=> {
                 return [response, ...currentComments]
            })
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        setIsError(true)
    }
    

   }
   

  
    

    useEffect(()=>{
        getArticlesByID(article_id).then((fetchedArticle)=>{
           
            setArticle(fetchedArticle)
        })
        getCommentsByID(article_id).then((fetchedComments)=>{
            
            setComments(fetchedComments)
        })
        
        
    }, [])
    
   
    return (
        <div>
            <h2> Article No.{article_id}  </h2>
            <ul className="article_list">
             <li>
                <h3><br/>
                Title: {article.title}</h3>
                <p>Article: {article.body}</p>
                <p>Author: {article.author}</p>
                <p>Votes: {article.votes + articleVote}</p>
                
                <button onClick={()=>{
                        updateArticleVote(1);
                    }}>+
                    </button>
                    <button onClick={()=>{
                        updateArticleVote(-1)
                    }}>-</button>



                <br/>


        <div>
            <h3>Post Comments</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setAuthor(e.target.value)} value={author} type={"text"} placeholder={`user name (required)`}></input><br/>
                <input onChange={(e)=>setBody(e.target.value)} value={body} type={`text`} placeholder={"comment (required)"}></input><br/>
                <button type="Submit">Click to Submit</button>
            </form>
            {isError? <p>Something Went Wrong!</p> : null}
        </div>


             </li>
            </ul>
            <ul className="comment_list">
            {comments
            .map(({comment_id, body, votes, author})=>
                    <li className = 'comment_card' key = {comment_id}>
                        <h2>comment ID: {comment_id}</h2>
                        <p>comment: {body}</p>
                        <p>author: {author}</p>
                        <p>votes: {votes}</p><button value={votes} onClick={(e) => {
                            upVote(e)
                        }}>+</button><button value={votes} onClick={(e) => {
                            downVote(e)
                        }}>-</button>
                    </li>
                )
                    
                }
            </ul>
        </div>
    )
}

export default Article