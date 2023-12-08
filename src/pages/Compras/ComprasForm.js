import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import service from "../../Http/httpHelper";

const ComprasForm = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    const [compra, setCompra] = useState(null);

    useEffect(() => {
        const fetchCompra = async () => {
            let response = await service.apiBackend.get(`/Sales/${id}`);
            setCompra(response);
        };
        fetchCompra();
    }, []);

    return (
        <>
            {compra && (
                console.log(compra),
                <section className='py-16 mb-5'>
                    <div className='container mx-auto mb-5'>
                        <form className="max-w-md mx-auto mt-5">
                            <div className="mb-4">
                                <label htmlFor="clientName" className="block mb-2">Client Name:</label>
                                <input type="text" id="clientName" value={compra.client.name} readOnly className="border border-gray-300 px-2 py-1 rounded" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="clientEmail" className="block mb-2">Client Email:</label>
                                <input type="email" id="clientEmail" value={compra.client.email} readOnly className="border border-gray-300 px-2 py-1 rounded" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="date" className="block mb-2">Date:</label>
                                <input type="text" id="date" value={compra.date} readOnly className="border border-gray-300 px-2 py-1 rounded" />
                            </div>



                            <div className="mb-4">
                                <label className="block mb-2">Details:</label>
                                <table className="border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 px-2 py-1">Product</th>
                                            <th className="border border-gray-300 px-2 py-1">Product Name</th>
                                            <th className="border border-gray-300 px-2 py-1">Quantity</th>
                                            <th className="border border-gray-300 px-2 py-1">Unit Price</th>
                                            <th className="border border-gray-300 px-2 py-1">Sub-Total</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {compra.detailSales.map((detail, index) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 px-2 py-1">
                                                    <img src={detail.product.image} alt={detail.product.name} />
                                                </td>
                                                <td className="border border-gray-300 px-2 py-1">{detail.product.name}</td>
                                                <td className="border border-gray-300 px-2 py-1">{detail.quantity}</td>
                                                <td className="border border-gray-300 px-2 py-1">{detail.unitPrice}</td>
                                                <td className="border border-gray-300 px-2 py-1">{detail.unitPrice * detail.quantity }</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="total" className="block mb-2">Total:</label>
                                <input type="text" id="total" value={compra.total} readOnly className="border border-gray-300 px-2 py-1 rounded" />
                            </div>
                        </form>
                    </div>
                </section>
            )}
        </>
    );
};

export default ComprasForm;