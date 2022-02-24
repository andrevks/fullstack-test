import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductList } from './components/ProductList';
import './styles/global.scss';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
           <Route path = { '/' } element = { < ProductList /> }/>
            {/* <Route path={'/create-product'} element = {<CreateProduct/>}/> */}
      </Routes>
    </BrowserRouter>
  ) 
}
 