import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { IconContext } from "react-icons";

interface ProductTableProps {
  id: number;
  name: string;
  category: string;
  price: number;
  created_at: string;
  index: number;
  handleDeleteProduct(id: number): void;
  setPopup({ }): any;
}

export function ProductItem({ id, name, category, price, created_at, handleDeleteProduct, index, setPopup }:ProductTableProps) {
  const timestamp = new Date(created_at)
  const data = `${timestamp.getDate()}/${timestamp.getMonth()}/${timestamp.getFullYear()}`
  const bgColor = index % 2 === 0 ? 'bg-darkBlue':'bg-[#58616C]';

  return (
    <div className={`flex ${bgColor} text-white px-4 py-2 mb-4 w-full max-w-screen-lg rounded-2xl `}>
                <p className="flex-1">{name}</p>
                <p className="flex-1">{category}</p>
                <p className="flex-1">R$ {price}</p>
                <p className="flex-1">{data}</p>
                <div className="flex  flex-1">
                  <div className="flex gap-4 items-center ml-2">
                    <span> 
                      <Link to={{
                        pathname: '/update-product',
                      }} state={{id, name, category, price}} >
                        <IconContext.Provider value={{color:"#FF9900"}}>
                          <AiFillEdit/>
                        </IconContext.Provider>
                      </Link> 
                    </span>
              <button onClick={() => setPopup({ show: true, id: id})}>
                        <IconContext.Provider value={{color:"#D62A2A"}}>
                          <FaTrashAlt/>
                        </IconContext.Provider>
                    </button>

                  </div>
                </div>
    </div>

  )
}