

import React from "react";

interface ProductTableProps {
  id: number;
  name: string;
  category: string;
  price: number;
  create_at: string;
  deleteProduct(id: number): void;
}

export function ProductItem({ id, name, category, price, create_at, deleteProduct }:ProductTableProps) {

  return (
            <>
                <th><p>{name}</p></th>
                <th><p>{category}</p>)</th>
                <th><p>{price}</p></th>
                <th>
                  <p> {(new Date(create_at).getDate() + '/')}</p>
                </th>

                <th>
                  <span onClick={() => deleteProduct(id)}>x</span>
                  <span>edit</span>
                </th>
            </>
  )
}