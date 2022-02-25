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
        <div className='flex items-center flex-col bg-darkBlue h-screen '>
                <div className='flex justify-center items-center bg-white w-full rounded-sm h-[48px] mb-32'>
                    <p>[LOGO] INVENTORY</p>
                </div>
                <div className="flex justify-around text-white">
                    <h1>Produtos</h1>
                    <button> 
                    <Link to={{
                        pathname:'/create-product'}}>
                        Adicionar Produto
                    </Link> 
                    </button>
                </div>
            <div className='bg-grayLight h-[28rem] rounded-xl p-6 w-full max-w-screen-lg '>
                <table className="w-full">
                    <tr className="text-gray">
                        <th className="px-6 py-4">Nome</th>
                        <th className="px-6 py-4">Categoria</th>
                        <th className="px-6 py-4">Preço</th>
                        <th className="px-6 py-4">Data de criação</th>
                        <th className="px-6 py-4">Ações</th>
                    </tr>
                    {products.map(product => <ProductItem id={product.id} name={product.name} category={product.category} price={product.price} created_at={product.created_at} deleteProduct={deleteProduct} />)}
                
                </table>
            </div>
        </div>
    )

}