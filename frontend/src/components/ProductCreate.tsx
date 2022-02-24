
import React, { useState } from 'react';
import ProductService from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import { ProductForm } from './ProductForm';

interface ICreateProduct {
  name: string;
  category: string;
  price: number;
}

export function ProductCreate() {

    let navigate = useNavigate();

    async function createNewProduct(product: ICreateProduct){
      const newProduct = {
        ...product,
        price: +(product.price)
      } 

        return ProductService.create(product)
    } 

    function handleSubmit(e: any): void{
        e.preventDefault()
        const name = (e.target[0].value)
        const category = (e.target[1].value)
        const price = (e.target[2].value)
        
        const formData = {
            name,
            category,
            price,
        }

       createNewProduct(formData)

      
       navigate('/', {replace: true })
    }


    return  <ProductForm handleSubmit={handleSubmit} submitBtn="Criar" formTitle="Criar Produto"/>
    
}

