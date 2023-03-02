import React from 'react';

const AddNewAssistant = () => {
    return (
        <div className='min-h-screen'>

            <div>
                <h1 className='uppercase text-3xl font-semibold text-primary'>Add new assistant</h1>

                <div className='max-w-xl mx-auto mt-14'>
                    <form>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">First Name</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Last Name</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Email</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Username</label>
                            <input type="text" className='input input-primary w-full max-w-md' required />
                        </div>
                        <div className='my-2 flex justify-between items-center'>
                            <label className="font-semibold mr-2">Password</label>
                            <input type="password" className='input input-primary w-full max-w-md' required />
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

export default AddNewAssistant;