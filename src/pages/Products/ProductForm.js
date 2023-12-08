import React, { useEffect, useState } from 'react'


const ProductForm = ({ onSubmit, ...props }) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        stock: ''
    });


    useEffect(() => {
        const overridenData = props.overridenData ?? {};
        setProduct({ ...product, ...overridenData })
        setLoading(false);
    }, [props.overridenData])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };
    if(loading){

    }else{
    return (
        <section className='py-16 mb-5'>
            <div className='container mx-auto mb-5'>
                <div className="max-w-md mx-auto mt-5 mb-5">
                    <input
                        className="w-full mb-5 px-3 py-2 border border-gray-300 rounded "
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        className="w-full mb-5 px-3 py-2 border border-gray-300 rounded"
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    <input
                        className="w-full mb-5 px-3 py-2 border border-gray-300 rounded"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                    <input
                        className="w-full mb-5 px-3 py-2 border border-gray-300 rounded"
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        placeholder="Image"
                    />
                    <input
                        className="w-full mb-5 px-3 py-2 border border-gray-300 rounded"
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        placeholder="Category"
                    />

                    <input
                        className="w-full mb-5 px-3 py-2 border border-gray-300 rounded"
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onSubmit(product)}
                    >
                        Enviar
                    </button>
                    
                </div>
            </div>
        </section >

    );}
};




export default ProductForm;