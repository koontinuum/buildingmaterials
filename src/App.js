import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import CategoriesPage from './pages/categoriesPage/CategoriesPage';
import ProductPage from './pages/productPage/ProductPage';
import BasketPage from './pages/basketPage/BasketPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/basket' element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
