import React, { useEffect, useState } from 'react'
import service from "../../Http/httpHelper";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ComprasList = () => {

    const [sales, setSales] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await service.apiBackend.get("/Sales/listSales");
            setSales(response.valores);

        };
        fetchProducts();
    }, []);

    const view = async (id) => {



    }
    return (
        <>
            <section className='py-16 mb-5'>
                <div className='container mx-auto mb-5'>
                    <div className="max-w-md mx-auto mt-5 mb-5">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Client</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map((sale) => (
                                    <tr key={sale.id}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                            <div className="text-sm leading-5 text-gray-900">{sale.id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                            <div className="text-sm leading-5 text-gray-900">{sale.client.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                            <div className="text-sm leading-5 text-gray-900">{sale.total}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                            <button onClick={() => view(sale.id)}>

                                                <Link to={'/compras/'+sale.id}>
                                                    <FaEye color='black' className='text-2xl' />

                                                </Link>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};




export default ComprasList;