import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OrderedProjects = () => {
    return (
        <section className='min-h-screen'>

            <div className='lg:flex justify-between items-center'>
                <h1 className='uppercase text-3xl font-semibold text-primary'>View Projects</h1>

                <div>
                    <Link to="/app/order-services" className='btn btn-primary text-white capitalize my-5 lg:ml-3'>
                        <MdAddCircle className='text-xl mr-2' />Order New Service
                    </Link>
                </div>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-around my-6'>
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>Filter By Clients (All)</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <select className="select select-primary w-full my-5 max-w-xs">
                    <option disabled selected>Filter By Services (All)</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>Filter By Status (All)</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
            </div>

            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table table-compact w-full border-2">
                        <thead>
                            <tr>
                                <th>Services</th>
                                <th>Client URL</th>
                                <th>Status</th>
                                <th>Created Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default OrderedProjects;