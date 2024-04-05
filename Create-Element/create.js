import getNews from "../Fetching-Api/getData.js";

const createNewsElement=async(parent,category)=>{
    const collectedNews=await getNews(category)
    newsCard(parent,collectedNews,category)
    return collectedNews
    // newsCard(parent,collectedNews)
    

}
export default createNewsElement

const newsCard=(parent,news,category)=>{
    parent.innerHTML=''
    const filteredArticles = news.articles.filter((article) => {
        return article.title && article.content&&article.urlToImage;
    })
    console.log(filteredArticles)
    filteredArticles.forEach((n)=>{
        const card=document.createElement('div')
        
        card.classList.add('news-card')
        card.innerHTML=`
        <div class="news-img">
            <img src="${n.urlToImage}">
        </div>
        
        <div class="news-content">
            <div class="news-title">
                <h3>${n.title}</h3>
        </div>
            <p>${n.content}</p>
            <div class="news-btn">
                <button id="news-btn">More details</button>
            </div>
        </div>
        
        `
        parent.appendChild(card)

    })
}