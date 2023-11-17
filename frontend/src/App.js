import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";


const App = () => {
  return (

    <div className="app-page">

      <header>
        <img
          className="header-icon"
          src="https://img.icons8.com/doodle/192/bitcoin.png"
          alt="bitcoin" />
        <h1>Crypto Dashboard</h1>
      </header>

      <main className="main-wrapper">

        <CurrencyConverter />
        <NewsFeed />

      </main>

      <footer>
        <div className="footer-my-link-div">
          Coded by
          <a
            href="https://github.com/Nix7amcm"
            target="_blank"
            rel="noopener noreferrer"
          > Nix7amcm⚡
          </a>.
        </div>

        <div className="footer-credits-div">
          Credit to

          <a
            href="https://rapidapi.com/hub"
            target="_blank"
            rel="noopener noreferrer"> RapidAPI
          </a>,

          <a
            href="https://icons8.com/icons"
            target="_blank"
            rel="noopener noreferrer"> Icons8
          </a>,

          <a
            href="https://icon-sets.iconify.design/"
            target="_blank"
            rel="noopener noreferrer"> Iconify
          </a>,

          <a
            href="https://favpng.com/png_view/rocket-rocket-business-fundal-png/kprVWH3H"
            target="_blank"
            rel="noopener noreferrer"> FavPNG
          </a>, 

          <a
            href="https://css-pattern.com/"
            target="_blank"
            rel="noopener noreferrer"> CSSPattern
          </a> and

          <a
            href="https://uiverse.io/Shakil-Babu/moody-mule-8"
            target="_blank"
            rel="noopener noreferrer"> Shakil-Babu on Uiverse
          </a>.

          With special thanks to
          <a
            href="https://www.youtube.com/watch?v=_itMdiSc0KI"
            target="_blank"
            rel="noopener noreferrer"> Ania Kub&oacute;w
          </a>.

        </div>

      </footer>

    </div>

  );
};

export default App;
