import { useEffect, useState } from "react";
import axios from "axios";
import backendURL from "../backendURL";

const NewsFeed = () => {

  const [ articles, setArticles ] = useState( [] );

  useEffect( () => {

    const fetchData = async () => {

      const options = {
        method: 'GET',
        url: backendURL + '/news'
      };

      // ----- Some API News Feed Options (ensure subscribed before use)
      //// Crypto News (250 - USED): rapidapi.com/sommerbraiden/api/crypto-news34
      //// Crypto News API (500 - USED): rapidapi.com/emir12/api/crypto-news-api5
      //**** */ crypto-news (400): rapidapi.com/NovusAPI/api/crypto-news16
      //@ H Crypto News (400): rapidapi.com/a19476210/api/h-crypto-news
      //@ Crypto Latest News (24 per day): rapidapi.com/osamarizk20/api/crypto-latest-news

      try {
        const response = await axios.request( options );
        setArticles( response.data );
        // !!! depending on API being used modify for where articles exist within the nesting structure of the array, with 'data' being index 0 (e.g. for 'Crypto News API' the 'payload' key within 0 holds the articles, so 'response.data.payload')

      } catch ( error ) {
        console.error( error );
      }
    };

    fetchData();
  }, [] );

  const first7articles = articles?.slice( 0, 7 );
  // >>> ( 1,8 ) When using 'Crypto News API' as 1st article is old


  return (

    <section className="newsfeed">

      <div className="newsfeed-title-wrapper">

        <h2 className="newsfeed-title">
          News Feed
        </h2>
        <img
          className="newsfeed-title-icon"
          src="https://img.icons8.com/doodle/192/news.png"
          alt="news" />

      </div>

      <div className="articles-box-wrapper">

        {first7articles?.map( ( article, _index ) => (

          <div key={_index} className="articles-div">

            <img
              className="article-icon"
              src="https://img.icons8.com/doodle/48/000000/megaphone--v1.png"
              alt="megaphone--v1" />

            <a
              className="article-link"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer">
              {article.title}
            </a>

          </div>

        ) )}

      </div>

    </section >

  );
};

export default NewsFeed;