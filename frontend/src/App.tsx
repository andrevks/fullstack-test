import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductList } from './components/ProductList';
import './styles/index.css';
import { ProductCreate } from './components/ProductCreate';
import { ProductUpdate } from './components/ProductUpdate';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path = { '/' } element = { < ProductList /> }/>
          <Route path={'/create-product'} element = {<ProductCreate/>}/>
          <Route path={'/update-product'} element = {<ProductUpdate/>}/>
      </Routes>
    </BrowserRouter>
  ) 
}
 