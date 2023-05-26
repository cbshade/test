import "./App.css";
import HeroDisplay from "./HeroDisplay";


const App = () => {
  return (
    <div className="App">
      <header className="hero">
        <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
        <nav className="navigation">
          <section className="primary-navigation">
            <h1>WineFlix</h1>
            <ul className="navigation-links">
              <li className="active">
                <a href="https://developer.mozilla.org">Home</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org">Whites</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org">Reds</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org">Blends</a>
              </li>
            </ul>
          </section>
          <section className="secondary-navigation">
            <span className="user-avatar">
              <a href="https://developer.mozilla.org">S</a>
            </span>
          </section>
        </nav>
        <HeroDisplay />
      </header>
      <main>
        <section className="category">
          <h2>Drink Again</h2>
          <ul>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <span className="new-badge">New!</span>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <span className="new-badge">New!</span>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <span className="new-badge">New!</span>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
              </div>
            </li>
          </ul>
        </section>
        <section className="category">
          <h2>Keep Drinking</h2>
          <ul>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="wine">
                <img src="/red-wine.jpg" alt="Wine" />
                <div className="amount-consumed">
                  <progress min="0" max="100" value="22"></progress>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
