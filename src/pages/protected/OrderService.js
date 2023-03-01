import React from 'react';
import { Link } from 'react-router-dom';

const OrderService = () => {
    return (
        <section className='min-h-screen'>

            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='uppercase text-3xl font-semibold text-primary'>Order New Service</h1>

                    <div>
                        <button className='btn btn-secondary text-white capitalize mr-3'>
                            Balance ($): 0
                        </button>
                        <Link to="#" className='btn btn-primary text-white capitalize ml-3'>
                            Deposit Funds
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OrderService;