import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegSave } from 'react-icons/fa';

const OrderService = () => {
    return (
        <section>

            <div className='min-h-screen'>
                <div className='flex justify-between items-center'>
                    <h1 className='uppercase lg:text-3xl text-2xl font-semibold text-primary'>Order New Service</h1>

                    <div>
                        <button className='btn btn-secondary text-white capitalize my-5 mr-3'>
                            Balance ($): 0
                        </button>
                        <Link to="#" className='btn btn-primary text-white capitalize lg:ml-3'>
                            Deposit Funds
                        </Link>
                    </div>
                </div>

                <div className='max-w-xl mx-auto mt-14'>
                    <form>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Select a Client</label>
                            <select className="select select-primary lg:w-full max-w-md" required>
                                <option disabled selected className='text-sm'>Business Name - Address</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Select a Service</label>
                            <select className="select select-primary lg:w-full max-w-md" required>
                                <option disabled selected>--Select a Service--</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Coupon Code</label>
                            <input type="text" className='input input-primary lg:w-full max-w-md' />
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Upload File</label>
                            <input type="file" className='file-input file-input-primary lg:w-full max-w-md' />
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Comment</label>
                            <textarea type="text" className='textarea textarea-primary w-full min-h-[100px] max-w-md' />
                        </div>
                        <div className='lg:flex items-center justify-between mt-6'>
                            <input type="submit" className='btn btn-primary text-white capitalize flex mx-auto' value="Submit Order Now" /> <br />
                            <button className='btn btn-primary text-white capitalize my-2 flex mx-auto'><FaRegSave className='text-white text-lg mr-2' />Schedule for latter</button>
                            <br />
                            <input type="date" className='input input-primary flex mx-auto' name="" id="" />
                        </div>
                    </form>
                    <div className='divider'>OR</div>
                    <div className='flex items-center justify-around'>
                        <button className='btn btn-warning text-white capitalize'><FaRegSave className='text-white text-lg mr-2' />Save as draft</button>
                        <button className='btn btn-error text-white capitalize'>cancel</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OrderService;