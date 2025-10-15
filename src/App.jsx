import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
               <img src={logo} className="App-logo" alt="logo" style={{height: '40px'}}/>
              <span>Мое приложение</span>
            </div>
          </div>
        </div>
      </header>
      <main className="container my-5">
        <div className="row g-4">
            <div className="col-md-4">
            <CardComponent
            title="Лягушечка 1"
            imageUrl = "/images/1.jpg"
            desctiption="Это самая крутая лягушечка номер 1"
            imageAlt="Лягушечка 1"/>
          </div>
          <div className="col-md-4">
            <CardComponent
            title="Лягушечка 2"
            imageUrl = "/images/2.jpg"
            desctiption="Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2"
            imageAlt="Лягушечка 2"/>
          </div>

            <div className="col-md-4">
            <CardComponent
            title="Лягушечка 3"
            imageUrl = "/images/3.jpg"
            desctiption="Это самая крутая лягушечка номер 3"
            imageAlt="Лягушечка 3"/>
          </div>
        </div>
      </main>
      <footer className="bg-secondary py-3 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <span>2025, курсы по Frontend</span>
            </div>
          </div>
        </div>
      </footer> 

    </div>
  );
}

export default App;
