import React, { useEffect, useState, useContext } from 'react'
import ProductForm from './ProductForm';
import service from "../../Http/httpHelper";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
const ProductCreate = () => {
    let navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const onSubmit = async (data) => {

        let request = {
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            stock: data.stock,
            category: data.category

        }

        await service.apiBackend.post("/product", request);

        toast.success("Se ha creado el producto");
        products.push(request);
        navigate("/");
    }

    

    return (
        <div>
            <ProductForm onSubmit={onSubmit} />
        </div>
    );
};


export default ProductCreate;