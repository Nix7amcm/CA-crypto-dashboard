import { Icon } from '@iconify/react';

const ExchangeRate = ( { exchangedData } ) => {

  const currencyIcons = {
    USD: 'cryptocurrency-color:usd',
    GBP: 'cryptocurrency-color:gbp',
    EUR: 'cryptocurrency-color:eur',
    BTC: 'cryptocurrency-color:btc',
    ETH: 'cryptocurrency-color:eth',
    USDT: 'cryptocurrency-color:usdt',
    AAVE: 'cryptocurrency-color:aave',
    ADA: 'cryptocurrency-color:ada',
    ATOM: 'cryptocurrency-color:atom',
    AVAX: 'cryptocurrency-color:avax',
    BCH: 'cryptocurrency-color:bch',
    BNB: 'cryptocurrency-color:bnb',
    DOGE: 'cryptocurrency-color:doge',
    DOT: 'cryptocurrency-color:dot',
    LTC: 'cryptocurrency-color:ltc',
    SOL: 'cryptocurrency-color:sol',
    TRX: 'cryptocurrency-color:trx',
    XLM: 'cryptocurrency-color:xlm',
    XRP: 'cryptocurrency-color:xrp',
  };


  return (

    <div className="exchange-rate">

      <div className="exchange-rate-title-wrapper">

        <h3 className="exchange-rate-title">
          Exchange Rate
        </h3>

        <img
          className="exchange-rate-title-icon"
          src="https://img.icons8.com/doodle/192/000000/apple-stocks.png"
          alt="apple-stocks" />

      </div>

      <p className="exchange-rate-result">{exchangedData.exchangeRate}</p>

      {/* >>> Currency name text instead of icons: 
      <p className="exchange-rate-currencies">{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p> */}

      <p className="exchange-rate-currencies-wrapper">

        <Icon
          className='exchange-rate-currencies-icon'
          icon={currencyIcons[ exchangedData.primaryCurrency ]}
        />

        <img
          className='exchange-rate-currencies-icon arrows'
          src="https://img.icons8.com/doodle/96/000000/chevron-down.png" alt="chevron-right" />

        <Icon
          className='exchange-rate-currencies-icon'
          icon={currencyIcons[ exchangedData.secondaryCurrency ]}
        />
        
      </p>

    </div>

  );
};

export default ExchangeRate;
