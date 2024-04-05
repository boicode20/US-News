const getNews=async(category)=>{
    const API_KEY='53d2c64172ae4b62904d4fd275af8adf'
    try{
        const news=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
        const newsData=await news.json()
        if(!news.ok) throw new Error('Error! Something went wrong.')
        return newsData
    }catch(err){
        console.error(err)
    }
}
export default getNews