import axios from 'axios'

export const firstPortfolioApi = axios.create({baseURL: "https://myfirstportfolio.onrender.com/api"})
export const getArticles = () =>{
    return firstPortfolioApi.get("/articles")
    .then((response)=>{
        
        return response.data.sortedArticles
    })
}

export const getArticlesByID = (article_id) =>{
    
    return firstPortfolioApi.get(`/articles/${article_id}`)
    .then((response)=>{
       return response.data.article
    })
}

export const getCommentsByID = (article_id) =>{
    return firstPortfolioApi.get(`/articles/${article_id}/comments`)
    .then((response)=>{
   
        return response.data.comments
    })
}

export const updateVotes = (article_id, value)=>{
    
    return firstPortfolioApi.patch(`/articles/${article_id}`,{inc_votes: value})
    .then((response)=>{
        
    })
}

export const postComments =(article_id, CommentToPost)=>{

    return firstPortfolioApi.post(`/articles/${article_id}/comments`, CommentToPost)
    .then((response)=>{

        return response.data
      
    }).catch((err)=>{
        console.log(err.config)
    })



}