import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import CategoriesPage from './pages/categoriesPage/CategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
