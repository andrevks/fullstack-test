import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from './ProductItem';
import ProductService from "../services/ProductService";
import { AxiosResponse } from 'axios';
interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  created_at: string;
}

type IProductNestedArray = Array<IProduct[]>

export function ProductList() {

    const [products, setProducts] = useState<IProduct[]>([])
    const [productsPagination, setProductsPagination] = useState<IProductNestedArray>([])
    const [productsPageNumber, setProductsPageNumber] = useState(0)


    async function deleteProduct(productId:number) {
        return ProductService.remove(productId);
    }

    function fecthProducts(): Promise<AxiosResponse<any,any>> {
        return ProductService.getAll()
    }

    useEffect((): void => {
        fecthProducts().then(response => {
            setProducts(response.data)
        })
    }, []);

    useEffect((): void => {
        generateProductsPagination(products)

    }, [products]);


    function generateProductsList(productsArr: IProduct[]) {
        return productsArr.map((product, index) =>
            <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                created_at={product.created_at}
                deleteProduct={deleteProduct}
                index={index}
            />
        )
    }

    function sliceProductsIntoChunks(productArr: IProduct[], chunkSize: number): IProductNestedArray {
        let newProducts:IProductNestedArray = []

        for (let i = 0; i < productArr.length; i += chunkSize){
            const chunk: IProduct[] = productArr.slice(i, i + chunkSize)
            newProducts.push(chunk)
        }

        return newProducts;
    }


    function generateProductsPagination(allProducts: IProduct[]) {
        const newProductsPagination = sliceProductsIntoChunks(allProducts, 6);
        setProductsPagination(newProductsPagination);
    }
    

    return (
        <div className='flex items-center flex-col bg-darkBlue h-screen '>
                <div className='flex justify-center items-center bg-white w-full rounded-sm h-[48px] mb-32'>
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
            
            <div className='flex flex-col bg-grayLight min-h-[rem] rounded-3xl p-6 w-full max-w-screen-lg '>
                    <div className="flex text-gray w-full mb-10">
                        <p className="ml-2 flex-1">Nome</p>
                        <p className="flex-1">Categoria</p>
                        <p className="flex-1">Preço</p>
                        <p className="flex-1">Data de criação</p>
                        <p className="flex-1">Ações</p>
                    </div>


                    {productsPagination.length !== 0 &&
                        generateProductsList(productsPagination[productsPageNumber])
                    }

                
                    <div className="flex justify-around">
                        <button
                            onClick={() => 
                                (productsPageNumber > 0) && setProductsPageNumber(productsPageNumber - 1)
                            }
                            >
                                Voltar </button>

                            <div>
                            {
                                productsPagination.map((_, page)=> {
                                    const isPageNumberEqual = page === productsPageNumber
                                    if (page < 4) {
                                        return <button className={` ${isPageNumberEqual?  'bg-yellow': 'bg-gray'} px-2.5 py-1 rounded-lg text-white m-2`}
                                            key={page} onClick={() => setProductsPageNumber(page)}>{page + 1}</button>
                                    }
                                } 
                                )  
                            }
                            </div>
                        <button
                            onClick={() => 
                                (productsPageNumber < productsPagination.length-1) &&
                                        setProductsPageNumber(productsPageNumber + 1)
                                }
                        
                        >Próximo</button>
                    </div>
                
            </div>
        </div>
    )

}