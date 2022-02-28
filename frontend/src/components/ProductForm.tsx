

import React, { useState } from 'react';
import { Navbar } from './Navbar';

interface IProduct {
  name: string;
  category: string;
  price: number;
}

interface IProductForm {
  id?: number,
  name?: string;
  category?: string;
  price?: number;
  submitBtn: string;
  formTitle: string;
  handleSubmit(e: any): void;
}

export function ProductForm({handleSubmit, formTitle, id, name, category, price, submitBtn}: IProductForm) {

    const inputAttribute = "w-300px rounded-md bg-gray text-black font-semibold p-3 placeholder-darkBlue hover:bg-darkBlue  hover:placeholder-white hover:text-white hover:font-bold"
    return (
        <div className='flex items-center flex-col bg-darkBlue min-h-screen '>
            <Navbar/>
            <div className='flex flex-col items-center text-white'>
                <h1 className="text-3xl mb-4">{formTitle}</h1>
                    <form className="bg-grayLight rounded-lg py-4 px-6" onSubmit={handleSubmit}>

                        <div className="flex flex-col justify-between gap-6 items-center ">
                            {id ? <input type="hidden" name='id'value={id} />: <p></p>}
                            <p>
                            <input className={inputAttribute} type='text' name='name' defaultValue={name && name} placeholder="Nome"></input>
                            </p>
                            <p>
                                <input  className={inputAttribute} type='text' name='category' defaultValue={category && category} placeholder="Categoria"></input>
                            </p>
                            <p>
                                <input className={inputAttribute} type='text' name='price' defaultValue={price && price.toString()} placeholder="Preço"></input>
                            </p>
                            <input className="bg-blue w-40 py-2 rounded-xl text-xl" type='submit' value={submitBtn}/>
                        </div>

                    </form>

            </div>
        </div>
    )
}









