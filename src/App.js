import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="main-menu">
            <ul className="navigation">
              <li className="puce"><a href="#">Menu1</a></li>
              <li className="puce"><a href="#">Menu2</a></li>
              <li className="puce"><a href="#">Menu3</a></li>
              <li className="puce"><a href="#">Menu4</a></li>
              <li className="puce"><a href="#">Menu5</a></li>
              <li className="puce"><a href="#">Menu6</a></li>
            </ul>
          </div>
          <div>
              <button className="button" type="button">Profil</button>
          </div>
      </header>

        <div className="homepage">
            <div className="presentation">
                <img src="https://st3.depositphotos.com/9880800/18500/i/600/depositphotos_185007706-stock-photo-view-of-stylish-empty-cafe.jpg"></img>
                <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div className="button-home">
                <button className="button-reserve">Réserver</button>
                <button className="button-rejoindre">Rejoindre</button>
            </div>
            <div className="list-restaurant">
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
