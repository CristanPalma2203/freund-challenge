import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Home = () => {

  const { products } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <button onClick={() => { }}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-sky-500 mb-5'>
              <Link
                to={`/create/product`}
              >
                <BsPlus className='text-3xl' />
              </Link>

            </div>
          </button>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>

            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
