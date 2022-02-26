import React from "react";
import { Link } from "react-router-dom";

interface ProductTableProps {
  id: number;
  name: string;
  category: string;
  price: number;
  created_at: string;
  deleteProduct(id: number): void;
  index: number;
}

export function ProductItem({ id, name, category, price, created_at, deleteProduct, index }:ProductTableProps) {
  const timestamp = new Date(created_at)
  const data = `${timestamp.getDate()}/${timestamp.getMonth()}/${timestamp.getFullYear()}`
  const bgColor = index % 2 === 0 ? 'bg-darkBlue':'bg-[#58616C]';

  return (
    <div className={`flex ${bgColor} text-white px-4 py-2 mb-4 w-full max-w-screen-lg rounded-2xl `}>
                <p className="flex-1">{name}</p>
                <p className="flex-1">{category}</p>
                <p className="flex-1">R$ {price}</p>
                <p className="flex-1">{data}</p>
                <div className="flex-1">
                  <span> 
                    <Link to={{
                      pathname: '/update-product',
                    }} state={{id, name, category, price}} >
                          editar
                    </Link> 
                  </span>
                  <button onClick={() => deleteProduct(id)}>x </button>
                </div>
    </div>

  )
}