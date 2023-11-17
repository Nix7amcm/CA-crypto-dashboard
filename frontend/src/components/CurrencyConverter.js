import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";
import backendURL from "../backendURL";

const CurrencyConverter = () => {

  const currencies = [ 'USD', 'GBP', 'EUR', 'BTC', 'ETH', 'USDT', 'AAVE', 'ADA', 'ATOM', 'AVAX', 'BCH', 'BNB', 'DOGE', 'DOT', 'LTC', 'SOL', 'TRX', 'XLM', 'XRP' ];
  const [ chosenPrimaryCurrency, setChosenPrimaryCurrency ] = useState( 'BTC' );
  const [ chosenSecondaryCurrency, setChosenSecondaryCurrency ] = useState( 'USD' );
  const [ amount, setAmount ] = useState( 1 );
  const [ exchangedData, setExchangedData ] = useState( {
    primaryCurrency: 'BTC',
    secondaryCurrency: 'USD',
    exchangeRate: 0
  } );
  const [ result, setResult ] = useState( 0 );

  const [ error, setError ] = useState( null );

  // console.log( exchangedData );

  const convert = async () => {

    const options = {
      method: 'GET',
      url: backendURL + '/convert',
      params: {
        from_currency: chosenPrimaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: chosenSecondaryCurrency
      }
    };

    try {

      const response = await axios.request( options );
      const exchangeRate = response.data.exchangeRate;
      console.log( exchangeRate );

      if ( !exchangeRate ) {
        throw new Error( 'Exchange rate not found' );
      }
      // console.log( response.data[ 'Realtime Currency Exchange Rate' ][ '5. Exchange Rate' ] );

      const calculatedResult = exchangeRate * amount;
      const roundedResult = Number( calculatedResult.toFixed( 4 ) );

      setResult( roundedResult );

      setExchangedData( {
        primaryCurrency: chosenPrimaryCurrency,
        secondaryCurrency: chosenSecondaryCurrency,
        exchangeRate: exchangeRate

      } );

      //>>> If the code reaches this point, clear the error state:
      setError( null );

    } catch ( error ) {
      console.error( error );
      setError( 'Sorry, this exchange rate is currently unavailable. Please try again in a few moments or select another option.' );
    }

  };

  // console.log( exchangeRate );


  return (

    <section className="currency-converter">

      <div className="currency-converter-title-wrapper">
        <h2 className="currency-converter-title">
          Currency Converter
        </h2>
        <img
          className="currency-converter-title-icon"
          src="https://img.icons8.com/doodle/192/exchange-euro.png"
          alt="exchange-euro" />
      </div>


      <div className="conversion-box-wrapper">

        <table className="conversion-table">
          <tbody>

            <tr className="primary-row">

              <td className="conversion-table-currency-labels">
                Convert From:
              </td>

              <td>
                <input
                  className="input-box primary"
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={( e ) => setAmount( e.target.value )}
                />
              </td>

              <td>
                <select
                  className="currency-options"
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  onChange={( e ) => setChosenPrimaryCurrency( e.target.value )}
                >
                  {currencies.map( ( currency, _index ) =>
                    ( <option key={_index}> {currency} </option> ) )}

                </select>
              </td>

            </tr>

            <tr className="secondary-row">

              <td className="conversion-table-currency-labels">
                To:
              </td>
              <td>

                <input
                  className="input-box secondary"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>

              <td>
                <select
                  className="currency-options"
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  onChange={( e ) => setChosenSecondaryCurrency( e.target.value )}
                >
                  {currencies.map( ( currency, _index ) =>
                    ( <option key={_index}> {currency} </option> ) )}

                </select>
              </td>

            </tr>

          </tbody>
        </table>

        {error && <p className="conversion-error">{error}</p>}

        <button
          className="convert-btn"
          id="convert-button"
          onClick={convert}>
          Convert
          <img
            className="convert-button-icon"
            width="48" height="48"
            src="https://img.icons8.com/doodle/192/000000/swap.png"
            alt="swap" />
        </button>

      </div>


      <ExchangeRate
        exchangedData={exchangedData}
      />

    </section>

  );
};

export default CurrencyConverter;
