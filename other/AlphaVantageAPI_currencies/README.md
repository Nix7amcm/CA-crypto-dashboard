# Alpha Vantage API list of digital currencies

This folder is not required for the project. I thought it would be useful to have easy access to the list of available crypto for Alpha Vantage API, to update 'currencies' selection as desired. 

```
// CurrencyConverter.js
const currencies = [ 'USD', 'GBP', 'BTC', 'ETH', 'SOL', 'ADA', 'MATIC', 'DOT', 'BCH', 'AVAX', 'ATOM', 'LTC', 'XRP' ];
```

Within this folder you will find:
- <u>digital_currency_list.xlsx</u> - I downloaded the .csv from Alpha Vantage and saved it as .xlsx into this folder. The list was correct at the time of building this project. You can download the current file by clicking the 'digital currency list' link here: [alphavantage.co/documentation](https://www.alphavantage.co/documentation/#:~:text=cryptocurrency%20specified%2C%20updated%20realtime.-,API%20Parameters,-%E2%9D%9A%20Required%3A%20function).
- <u>xlsxToJson.js</u> - code to convert data into JSON format. I thought this might be useful in case I wanted to try modify the project (or if creating another larger project) at some point to access the data directly.
- <u>result-digital-currencies.json</u> - output data after code executed (see xlsxToJson.js for details)
- <u>digital-currency-list.md</u> - I used 'Markdown to Excel table' extension to create this. (Create .md file and paste in data from Excel).



