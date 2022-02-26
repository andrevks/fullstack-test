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
                <div className='flex justify-center items-center bg-white w-full  rounded-sm h-[48px] mb-32'>
                    <p>[LOGO] INVENTORY</p>
                </div>
                <div className="w-full flex justify-between items-center max-w-screen-lg text-white px-6 py-6">
                    <p className="text-4xl">Produtos</p>
                    <Link className="bg-blue p-2 rounded-2xl"
                        to={{
                        pathname:'/create-product'}}>
                        Adicionar
                    </Link> 
                </div>
            
            <div className='flex flex-col bg-grayLight min-h-[28rem] rounded-3xl p-6 w-full max-w-screen-lg '>
                    <div className="flex text-gray w-full mb-10">
                        <p className="ml-2 flex-1">Nome</p>
                        <p className="flex-1">Categoria</p>
                        <p className="flex-1">Preço</p>
                        <p className="flex-1">Data de criação</p>
                        <p className="flex-1">Ações</p>
                    </div>

                    {products.map((product, index) => <ProductItem id={product.id} name={product.name} category={product.category} price={product.price} created_at={product.created_at} deleteProduct={deleteProduct} index={index}/>)}
                
                    <div className="flex justify-around">
                        <button>Voltar</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>Próximo</button>
                    </div>
                
            </div>
        </div>
    )

}