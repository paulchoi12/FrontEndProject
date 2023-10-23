import axios from "axios";

export const firstPortfolioApi = axios.create({baseURL: "https://myfirstportfolio.onrender.com/api"})
export const getArticles = () =>{
    return firstPortfolioApi.get("/articles")
    .then((response)=>{
        console.log(response.data.sortedArticles)
        return response.data.sortedArticles
    })
}

export const getArticlesByID = () =>{
    return firstPortfolioApi.get("/articles/:article_id")
}