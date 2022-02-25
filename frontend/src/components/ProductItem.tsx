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
    <tr className="bg-darkBlue text-white p-10 w-full max-w-screen-lg ">
                <th className="px-6"><p>{name}</p></th>
                <th className="px-6"><p>{category}</p></th>
                <th className="px-6"><p>{price}</p></th>
                <th className="px-6">
                  <p> {data} </p>
                </th>
                <th className="px-6">
                  <span> 
                    <Link to={{
                      pathname: '/update-product',
                    }} state={{id, name, category, price}} >
                          Editar
                    </Link> 
                  </span>
                  <br></br>
                  <span onClick={() => deleteProduct(id)}>x </span>
                </th>
            </tr>
  )
}