import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import CategoriesPage from './pages/categoriesPage/CategoriesPage';
import ProductPage from './pages/productPage/ProductPage';
import BasketPage from './pages/basketPage/BasketPage';
import AboutStorePage from './pages/aboutStorePage/AboutStorePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/категории' element={<CategoriesPage />} />
          <Route path='/товары' element={<ProductPage />} />
          <Route path='/товар/:id' element={<ProductPage />} />
          <Route path='/корзина' element={<BasketPage />} />
          <Route path='/о-магазине' element={<AboutStorePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
