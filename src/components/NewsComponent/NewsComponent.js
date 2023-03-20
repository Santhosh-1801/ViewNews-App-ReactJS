import { Container } from "@mui/system";
import React from "react";
import Newscard from "../Newscard/Newscard";
import "../NewsComponent/NewsComponent.css"


const NewsComponent = ({newsArray,newsResult,loadmore,setLoadmore}) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="dmessage">
        <span className="downloadexperience">
        For best experience you can download in your smartphones
        </span>
        <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
      {newsArray.map((newsItem)=>(
        <Newscard newsItem={newsItem} id={newsItem.title}/>
      ))}
      
      {loadmore<=newsResult &&
      <>
      <hr/>
      <button className="loadmore" onClick={()=>(
        setLoadmore(loadmore+20)
      )}>
      Load News
     </button>
     </>}
      
      
      
      </div>
    </Container>
  )
}

export default NewsComponent