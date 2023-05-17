import './App.css';
import AboutStore from './components/aboutStore/AboutStore';
import Catalog from './components/catalog/Catalog';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Catalog />
      <AboutStore />
      {/* <Slider /> */}
    </div>
  );
}

export default App;
