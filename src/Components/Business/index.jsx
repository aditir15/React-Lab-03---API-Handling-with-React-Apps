import React, {useState,useEffect} from 'react';
import {getBussinessNews} from '../../APIs/getBussinessNews';


function Business(){
    const [news,setNews] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const result = await getBussinessNews()
        console.log(result)
        setNews(result);
    }
    console.log(news)
    return(
        <ul>
             {news.map(article =>(
                <li key={article.title}>{article.title}</li>
            ))} 
        </ul>
    );
}

export default Business;