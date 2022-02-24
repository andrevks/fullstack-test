import React from "react";
import { Link } from "react-router-dom";

interface ProductTableProps {
  id: number;
  name: string;
  category: string;
  price: number;
  created_at: string;
  deleteProduct(id: number): void;
}

export function ProductItem({ id, name, category, price, created_at, deleteProduct }:ProductTableProps) {
  const timestamp = new Date(created_at)
  const data = `${timestamp.getDate()}/${timestamp.getMonth()}/${timestamp.getFullYear()}`
  return (
            <tr>
                <th><p>{name}</p></th>
                <th><p>{category}</p></th>
                <th><p>{price}</p></th>
                <th>
                  <p> {data} </p>
                </th>
                <th>
                  <span onClick={() => deleteProduct(id)}>x </span>
                <button> 
                  <Link to={{
                    pathname: '/update-product',
                  }} state={{id, name, category, price}} >
                         Editar
                   </Link> 
               </button>
                </th>
            </tr>
  )
}