import React, { useEffect, useState } from 'react';
import  { AxiosResponse, AxiosResponseHeaders } from 'axios'
import { Link } from 'react-router-dom';
import { ProductItem } from './ProductItem';
import ProductService from "../services/ProductService";

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  created_at: string;
}

export function ProductList() {

    const [products, setProducts] = useState<IProduct[]>([])


    async function deleteProduct(productId:number) {
        return ProductService.remove(productId);
    }

    async function fecthProducts(): Promise<AxiosResponse>{
        return ProductService.getAll()
    }

    useEffect(():void => {
        fecthProducts().then(response => setProducts(response.data))
    }, [products]);

    


    return (
        <div className='bg-blue-500'>
            <div>
                <h1>Produtos</h1>
                <button> 
                   <Link to={{
                       pathname:'/create-product'}}>
                       Adicionar Produto
                   </Link> 
               </button>
            </div>
            <table >
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Data de criação</th>
                    <th>Ações</th>
                </tr>
                {products.map(product => <ProductItem id={product.id} name={product.name} category={product.category} price={product.price} created_at={product.created_at} deleteProduct={deleteProduct} />)}
             
            </table>
        </div>
    )

}