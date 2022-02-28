import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from './ProductItem';
import { Navbar } from './Navbar';
import ProductService from "../services/ProductService";
import { AxiosResponse } from 'axios';
// Images
import { IconContext } from "react-icons";
import { GrNext, GrPrevious  } from "react-icons/gr";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Popup from './Popup';


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
    const [popup, setPopup] = useState({show: false, id: null})

    

    async function handleDeleteProduct() {
        if (popup.show && popup.id) {
            const newProducts = products.filter(product => product.id !== popup.id)
            setProducts(newProducts);
            setPopup({
                show: false,
                id: null
            });
            return ProductService.remove(popup.id? popup.id: 0);
        }
        
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
                handleDeleteProduct={handleDeleteProduct}
                index={index}
                setPopup={setPopup}
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
        <div className='flex items-center flex-col bg-darkBlue min-h-screen '>
            <Navbar/>
            <div className="flex flex-col w-full items-center pb-10">

                <div className="w-full flex justify-between items-center max-w-screen-lg text-white px-6 py-6 ">
                    <p className="text-4xl">Produtos</p>
                    <Link className="bg-blue p-2 rounded-2xl"
                        to={{
                        pathname:'/create-product'}}>
                        <div className="flex items-center gap-1">
                            Adicionar
                        </div>
                    </Link> 
                </div>

            
            
                <div className='relative flex flex-col bg-grayLight min-h-[30rem] rounded-3xl p-6 w-full max-w-screen-lg'>
                        <div className="flex text-gray w-full mb-10">
                            <p className="ml-2 flex-1">Nome</p>
                            <p className="flex-1">Categoria</p>
                            <p className="flex-1">Preço</p>
                            <p className="flex-1">Data de criação</p>
                            <p className="flex-1">Ações</p>
                        </div>

                        <div className="pb-10">
                        
                            {productsPagination.length !== 0 &&
                                generateProductsList(productsPagination[productsPageNumber])
                            }
                        
                        </div>            

                    
                        <div className="flex justify-between absolute bottom-0 w-11/12 ">
                            <button
                                onClick={() => 
                                    (productsPageNumber > 0) && setProductsPageNumber(productsPageNumber - 1)
                                }
                                className="ml-4"
                        >
                            <div className="flex items-center">
                                <GrPrevious /> <p className={`
                                    ${productsPageNumber > 0? "font-semibold":"font-light"}
                            
                            `} >Anterior</p>
                            </div>
                                </button>

                                <div>
                                {
                                    productsPagination.map(( _, page)=> {
                                        const isPageNumberEqual = page === productsPageNumber
                                        if (page < 6) {
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
                                className="mr-4"
                            >
                                <div className="flex items-center">
                                <p className=
                                {`
                                ${(productsPageNumber < productsPagination.length - 1) ?
                                    "font-semibold": "font-light"
                                    }`}>Próximo</p>
                                    <GrNext />
                                    
                                </div>
                            </button>
                        </div>
                    
                </div>

                {popup.show && <Popup handleDeleteProduct={handleDeleteProduct} setPopup={setPopup}/>}
            </div>
        </div>
    )

}