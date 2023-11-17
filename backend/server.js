const PORT = 8000;
const express = require( 'express' );
const cors = require( 'cors' );
const axios = require( 'axios' );
require('dotenv').config({ path: '../.env' });
const app = express();
app.use( cors() );

app.get( '/', ( req, res ) => {
  res.json( 'Welcome to the Backend 😎' );
} );

// ***** CurrencyConvert.js:
app.get( '/convert', async ( req, res ) => {

  // ----- use the console to check for the data format to set params:
  /* console.log( req ); // >>> check request data in console - look for 'query' data
  console.log( req.query.to_currency ); // >>> we know from 'query' that this is the key so use this to test that the data is received to the console when e.g. 'USD' is selected as 'To' in browser */

  // ----- set params variables based off data from query in console checks
  const { from_currency: fromCurrency, to_currency: toCurrency } = req.query;

  //req.query.to_currency
  // req.query.from_currency

  // ----- check if data is successfully received using params variables (select currencies in browser and convert)
  console.log( 'toCurrency', toCurrency );
  console.log( 'fromCurrency', fromCurrency );

  try {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: fromCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: toCurrency
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };


    const response = await axios.request( options );

    const exchangeRate = response.data[ 'Realtime Currency Exchange Rate' ][ '5. Exchange Rate' ];
    if ( !exchangeRate ) {
      throw new Error( 'Exchange rate not found' );
    }

    res.json( { exchangeRate } );
  } catch ( error ) {
    console.error( error );
    res.status( 500 ).json( { error: 'Failed to convert currency. Please try again.' } );
  }
} );


// ***** NewsFeed.js:
app.get( '/news', ( req, res ) => {

  const fetchData = async () => {

    const options = {
      method: 'GET',
      url: 'https://crypto-news16.p.rapidapi.com/news/top/7',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
      }
    };

    // ----- Some API News Feed Options (ensure subscribed before use)
    //// Crypto News (250 - USED): rapidapi.com/sommerbraiden/api/crypto-news34
    //// Crypto News API (500 - USED): rapidapi.com/emir12/api/crypto-news-api5
    //**** */ crypto-news (400): rapidapi.com/NovusAPI/api/crypto-news16
    //@ H Crypto News (400): rapidapi.com/a19476210/api/h-crypto-news
    //@ Crypto Latest News (24 per day): rapidapi.com/osamarizk20/api/crypto-latest-news

    try {
      const response = await axios.request( options );
      res.json( response.data );
      // !!! POSSIBLY APPLIES HERE TOO (as well as in NewsFeed.js)?? - depending on API being used modify for where articles exist within the nesting structure of the array, with 'data' being index 0 (e.g. for 'Crypto News API' the 'payload' key within 0 holds the articles, so 'response.data.payload')

    } catch ( error ) {
      console.error( error );
    }
  };

  fetchData();

} );


app.listen( 8000, () => console.log( `Server is running on port ${PORT}` ) )



