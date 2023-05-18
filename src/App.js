import './App.css';
import AboutStore from './components/aboutStore/AboutStore';
import Catalog from './components/catalog/Catalog';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Slide from './components/slide/Slide';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import InfoStore from './components/infoStore/InfoStore';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Catalog />
      <AboutStore />
      <Slide />
      <InfoStore />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
