

import React, { useState } from 'react';

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

    return (
        <div>
            <div>
            <h1>{formTitle}</h1>
                <form onSubmit={handleSubmit}>
                    {id ? <input type="hidden" name='id'value={id} />: <p></p>}
                    <p>
                        Nome
                        <input type='text' name='name' defaultValue={name? name: " "}></input>
                    </p>
                    <p>
                        Categoria
                        <input type='text' name='category' defaultValue={category? category: " "}></input>
                    </p>
                    <p>
                        Preço
                        <input type='text' name='price' defaultValue={price? price.toString(): " "} ></input>
                    </p>
                    <input type='submit' value={submitBtn}/>
                </form>
            </div>
        </div>
    )
}









