import React, { useEffect, useState, useContext } from 'react'
import ProductForm from './ProductForm';
import service from "../../Http/httpHelper";
import { toast } from 'react-toastify';
import { useNavigate , useParams} from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';

const ProductEdit = () => {
    let navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        stock: ''
    });
    let { id } = useParams();
    const { products } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await service.apiBackend.get(`/product/${id}`);
            setProduct(response);
        };
        fetchProducts();
      }, []);

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
            <ProductForm  overridenData={product} onSubmit={onSubmit} />
        </div>
    );
};


export default ProductEdit;