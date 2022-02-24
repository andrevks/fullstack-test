

import React, { useState } from 'react';
import ProductService from "../services/ProductService";
import { useNavigate, useLocation } from 'react-router-dom';
import { ProductForm } from './ProductForm';

interface IUpdateProduct {
  name: string;
  category: string;
  price: number;
}

export function ProductUpdate(props: any) {

  const location = useLocation();
  const product:any = location.state;

  let navigate = useNavigate();

  async function updateProduct(productId: number, product: IUpdateProduct) {
      const newProduct = {
        ...product,
        price: +(product.price)
      } 
      return ProductService.update(productId, newProduct);
  }

  function handleSubmit(e: any): void{
      e.preventDefault()


      const id = (e.target[0].value)
      const name = (e.target[1].value)
      const category = (e.target[2].value)
      const price = (e.target[3].value)
      
      const formData = {
          name: name? name: product.name,
          category: category? category: product.category,
          price: price? parseFloat(price): product.price,
      }

      updateProduct(id, formData)

    
      navigate('/', {replace: true })
  }


  return <ProductForm handleSubmit={handleSubmit} id={product.id} submitBtn="Editar" name={product.name} category={product.category} price={product.price} formTitle="Editar Produto"/>
    
}