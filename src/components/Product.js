import React, { useContext, useEffect } from 'react';
import { Link ,useNavigate  } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
import service from "../Http/httpHelper";
import { MdOutlineDelete } from "react-icons/md";
import { ProductContext } from '../contexts/ProductContext';
const Product = ({ product }) => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { id, image, category, name, price } = product;
  const onSubmit = async (id) => {

    await service.apiBackend.delete("/product/"+id);
    toast.warn("Se ha eliminado el producto");

    setTimeout(() => {
      window.location.reload();
    }, 2500);



  }

  useEffect (() => { 


  },[products])
  return (

    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image}
              alt=''
            />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <MdOutlineShoppingCart className='text-2xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>

          <Link
            to={`/edit/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <CiEdit />

          </Link>
          <button onClick={() => onSubmit( id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <MdOutlineDelete className='text-2xl' />
            </div>
          </button>

        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{name}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
