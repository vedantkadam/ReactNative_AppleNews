import { create } from 'apisauce'
const api = create({
    baseURL: 'https://newsapi.org/v2',
    
  })

const apiKey='?country=us&apiKey=8d3f833c018748b39213ae0981475ddc'
const getTopHeadlines=api.get('/top-headlines'+apiKey)

//last part h getByCategory
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=8d3f833c018748b39213ae0981475ddc")

export default{
    getTopHeadlines,
    getByCategory
}