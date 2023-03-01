import React from 'react';

const Contact = () => {
    return (
        <section className='min-h-screen'>
            <h1 className='uppercase text-2xl font-semibold text-primary'>Contact</h1>
            <div className='flex items-center justify-center mt-5'>
                <form action="">
                    <div className='form-control'>
                        <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs" required />
                        <input type="email" placeholder="Your Email Address" className="input input-bordered input-primary w-full max-w-xs my-3" required />
                        <select required className="select select-primary w-full max-w-xs">
                            <option disabled selected>Select Department</option>
                            <option>Game of Thrones</option>
                            <option>Lost</option>
                            <option>Breaking Bad</option>
                            <option>Walking Dead</option>
                        </select>
                        <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs my-3" required />
                        <textarea className="textarea textarea-primary max-w-xs min-h-[150px]" placeholder="Massage" required></textarea>

                        <div className='mb-3'>
                            <label className="label">
                                <span className="label-text">Add Attachment</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <input className='btn btn-primary max-w-xs' type="submit" value="Submit" />
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Contact;