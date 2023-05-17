import './App.css';
import AboutStore from './components/aboutStore/AboutStore';
import Catalog from './components/catalog/Catalog';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Slide from './components/slide/Slide';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Catalog />
      <AboutStore />
      <Slide />
    </div>
  );
}

export default App;
