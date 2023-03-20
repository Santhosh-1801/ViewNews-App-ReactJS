
import { useEffect, useState } from 'react';
import './App.css';
import Navigate from './components/Navigate';
import logo from "./images/news.png"
import axios from 'axios';
import NewsComponent from './components/NewsComponent/NewsComponent';
import Footer from './components/Footer/Footer';


function App() {
  const [category,setCategory]=useState("general");
  const [newsArray,setnewsArray]=useState([])
  const [newsResult,setnewsResult]=useState();
  const [loadmore,setLoadmore]=useState(20)

  const fetchNews=async()=>{
    try {
      const proxyURL="https://cors-anywhere.herokuapp.com/"
      const newsData=await axios.get(`${proxyURL}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadmore}`)
      setnewsArray(newsData.data.articles);
      setnewsResult(newsData.data.totalResults);
      
    } catch (error) {
      console.log(error.message)
      
    }
  }
  console.log(newsArray)
  useEffect(()=>{
  fetchNews()
  },[category,newsResult,loadmore])
  return (
    <div className="App">
      <Navigate setCategory={setCategory}/>
      <NewsComponent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResult={newsResult}/>
      <Footer/>
    </div>
  );
}

export default App;
