import React from 'react';

const AddNewClient = () => {
    return (
        <div className='min-h-screen'>

            <div>
                <h1 className='uppercase text-3xl font-semibold text-primary'>Add new Client</h1>

                <div className='max-w-2xl mx-auto mt-14'>
                    <form>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-16 lg:mr-2">Website</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-14 lg:mr-2">Business Name</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-12 lg:mr-2">Business Address</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-4 lg:mr-2">Business Phone Number</label>
                            <input type="number" className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold lg:mr-2">Business Description</label>
                            <textarea type="text" className='textarea textarea-primary w-full max-w-md min-h-[10px] ' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-6 lg:mr-2">Categories</label>
                            <textarea type="text" className='textarea textarea-primary w-full max-w-md min-h-[100px]' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Upload Business Logo</label>
                            <input type="file" className='file-input file-input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-12 lg:mr-2">Facebook URL</label>
                            <input type="url" className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-16 lg:mr-2">Twitter URL</label>
                            <input type="url" className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-14 lg:mr-2">LinkedIn URL</label>
                            <input type="url" className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-14 lg:mr-2">YouTube URL</label>
                            <input type="url" className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-11 lg:mr-2">Instagram URL</label>
                            <input type="url" className='input input-primary w-full max-w-md' />
                        </div>

                        <div className='flex gap-4 items-center justify-center mt-6'>
                            <input type="submit" className='btn btn-primary text-white capitalize' value="Submit" />
                            <button className='btn btn-error text-white capitalize'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddNewClient;