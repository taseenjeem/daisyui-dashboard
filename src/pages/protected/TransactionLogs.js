import React from 'react';
import { Link } from 'react-router-dom';

const TransactionLogs = () => {
    return (
        <section className='min-h-screen'>

            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='uppercase text-3xl font-semibold text-primary'>Transaction History</h1>

                    <div>
                        <button className='btn btn-secondary text-white capitalize mr-3'>
                            Balance ($): 0
                        </button>
                        <Link to="#" className='btn btn-primary text-white capitalize ml-3'>
                            Deposit Funds
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="overflow-x-auto mt-6">
                        <table className="table table-compact w-full border-2">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount ($)</th>
                                    <th>Balance</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Zemlak, Daniel and Leannon</td>
                                    <td>United States</td>
                                    <td>12/5/2020</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Carroll Group</td>
                                    <td>China</td>
                                    <td>8/15/2020</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Marjy Ferencz</td>
                                    <td>Office Assistant I</td>
                                    <td>Rowe-Schoen</td>
                                    <td>Russia</td>
                                    <td>3/25/2021</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TransactionLogs;