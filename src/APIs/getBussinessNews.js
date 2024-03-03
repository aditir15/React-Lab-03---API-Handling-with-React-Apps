import axios from "axios"
const API = 'https://newsapi.org/v2/everything?' +
'q=Apple&' +
'from=2024-02-03&' +
'sortBy=popularity&' +
'apiKey=8c5985711a854aae89f2707ea8358e71';
let data = null
export const getBussinessNews = async () => {
    await axios.get(`${API}`).then(res=>{
        
        console.log(data)
        data = res.data.articles;
        
    })
    .catch(err=>{
        console.log(err)
    })

    return data;
}