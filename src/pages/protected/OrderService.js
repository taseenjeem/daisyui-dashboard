import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegSave } from 'react-icons/fa';
import { ImArrowRight } from 'react-icons/im';

const OrderService = () => {

    const [service, setService] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    // Select services "Big Citation"
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [selectedValue4, setSelectedValue4] = useState('');
    const [selectedValue5, setSelectedValue5] = useState('');
    // Select services "Budget Tier 1's"
    const [nish, setNish] = useState('');
    const [selectedValue6, setSelectedValue6] = useState('');
    const [selectedValue7, setSelectedValue7] = useState('');
    const [selectedValue8, setSelectedValue8] = useState('');
    const [selectedValue9, setSelectedValue9] = useState('');
    // Select service "Citation Cleanup & Boost"
    const [selectedValue10, setSelectedValue10] = useState('');
    const [selectedValue11, setSelectedValue11] = useState('');
    const [selectedValue12, setSelectedValue12] = useState('');
    const [selectedValue13, setSelectedValue13] = useState('');

    return (
        <section>

            <div className='min-h-screen'>
                <div className='md:flex justify-between items-center'>
                    <h1 className='uppercase text-3xl font-semibold text-primary'>Order New Service</h1>

                    <div>
                        <button className='btn btn-secondary text-white capitalize my-5 mr-3'>
                            Balance ($): 0
                        </button>
                        <Link to="/app/deposit-funds" className='btn btn-primary text-white capitalize lg:ml-3'>
                            Deposit Funds
                        </Link>
                    </div>
                </div>

                <div className='max-w-2xl mx-auto mt-14'>
                    <form>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Select a Client</label>
                            <select className="select select-primary w-full max-w-md" required>
                                <option disabled selected className='text-sm'>Business Name - Address</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Select a Service</label>
                            <select onChange={e => setService(e.target.value)} className="select select-primary w-full max-w-md" required>
                                <option disabled selected>Please Select A Service</option>
                                <option>Big Citation</option>
                                <option>Budget Tier 1's</option>
                                <option>Citation Cleanup & Boost</option>
                                <option>GMB Foundation</option>
                                <option>GMB Post Management</option>
                                <option>High Authority Guest Post</option>
                                <option>Hyper Local Citations</option>
                                <option>Local Citation Audit</option>
                                <option>Local Mini Sites</option>
                                <option>Press Release Marketing Machine</option>
                                <option>Rich Media Citations</option>
                                <option>Social Foundation 2.0</option>
                            </select>
                        </div>

                        {/* Big Citations */}
                        {
                            service === 'Big Citation' &&
                            <>
                                <div className='md:flex justify-between items-center my-2'>
                                    <label className="font-semibold mr-2">What is your targeted country for this order?</label>
                                    <select className="select select-primary max-w-md" required>
                                        <option disabled selected>Select a country</option>
                                        <option>United State of America (USA)</option>
                                        <option>United Kingdom (UK)</option>
                                        <option>Canada (CAN)</option>
                                        <option>Australia (AU)</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />Add on extra Hyper Local citations to your order if you'd us to complete them alongside your campaign.</label>

                                    <div className='  '>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue === 'No Thanks'}
                                                onChange={(event) => setSelectedValue(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="40 Done-For-you Citations - ($39.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue === '40 Done-For-you Citations - ($39.00)'}
                                                onChange={(event) => { setSelectedValue(event.target.value); setTotalPrice(totalPrice + 39.00) }}
                                            />
                                            <label className='mx-2'>40 Done-For-you Citations - ($39.00)</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="80 Done-For-you Citations - ($74.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue === '80 Done-For-you Citations - ($74.00)'}
                                                onChange={(event) => { setSelectedValue(event.target.value); setTotalPrice(totalPrice + 74.00) }}
                                            />
                                            <label className='mx-2'>80 Done-For-you Citations - ($74.00)</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="150 Done-For-you Citations - ($139.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue === '150 Done-For-you Citations - ($139.00)'}
                                                onChange={(event) => setSelectedValue(event.target.value)}
                                            />
                                            <label className='mx-2'>150 Done-For-you Citations - ($139.00)</label>
                                        </div>
                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />  If you have pre-existing citations you have 2 options.
                                        <br />1) You can send us your list of citations and we can work around them.
                                        <br />2) We can run an audit for you, find what's out there, and then work around them. Either way, it's important to have your pre-existing citations accounted for so you're assured no duplicates are created.</label>

                                    <div className='my-3'>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, I'm not sure how many inaccurate citations are out there - ($14.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue1 === "Yes, I'm not sure how many inaccurate citations are out there - ($14.99)"}
                                                onChange={(event) => setSelectedValue1(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, I'm not sure how many inaccurate citations are out there - ($14.99)</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No, I will upload the full list to my order below."
                                                className="radio radio-primary"
                                                checked={selectedValue1 === 'No, I will upload the full list to my order below.'}
                                                onChange={(event) => setSelectedValue1(event.target.value)}
                                            />
                                            <label className='mx-2'>No, I will upload the full list to my order below.</label>
                                        </div>

                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' /> We can write 10 unique business descriptions and rotate them between each submission, so you'll have a little more unique content working in your favor. </label>

                                    <div className='my-3'>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value=" Yes, I want 10 unique business descriptions written and rotated with submissions - ($24.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue2 === " Yes, I want 10 unique business descriptions written and rotated with submissions - ($24.99)"}
                                                onChange={(event) => setSelectedValue2(event.target.value)}
                                            />
                                            <label className='mx-2'> Yes, I want 10 unique business descriptions written and rotated with submissions - ($24.99)</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, I want 25 unique business descriptions written and rotated with submissions - ($49.00) "
                                                className="radio radio-primary"
                                                checked={selectedValue2 === 'Yes, I want 25 unique business descriptions written and rotated with submissions - ($49.00) '}
                                                onChange={(event) => setSelectedValue2(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, I want 25 unique business descriptions written and rotated with submissions - ($49.00) </label>
                                        </div>

                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' /> We can drip contextual links over the course of 14 or 30 days. Links are distributed randomly to the live link URLs we create for you at a rate of roughly 40-60 links per day. These are good for improving indexing and pushing some juice to those new links/citations that are built for you. </label>

                                    <div className='my-3'>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue3 === "No Thanks"}
                                                onChange={(event) => setSelectedValue3(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue3 === 'Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)'}
                                                onChange={(event) => setSelectedValue3(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue3 === 'Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)'}
                                                onChange={(event) => setSelectedValue3(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)</label>
                                        </div>

                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' /> Need your order in 7 days or less? Use this option to get your order rushed </label>

                                    <div className='my-3'>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue4 === "No Thanks"}
                                                onChange={(event) => setSelectedValue4(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, I need the report immediately and can not wait - ($19.95)"
                                                className="radio radio-primary"
                                                checked={selectedValue4 === 'Yes, I need the report immediately and can not wait - ($19.95)'}
                                                onChange={(event) => setSelectedValue4(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, I need the report immediately and can not wait - ($19.95)</label>
                                        </div>

                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' /> We will send multiple Google crawlers to your fresh links over a period of 3 weeks. </label>

                                    <div className='my-3'>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue5 === "No Thanks"}
                                                onChange={(event) => setSelectedValue5(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>

                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, please - ($4.95)"
                                                className="radio radio-primary"
                                                checked={selectedValue5 === 'Yes, please - ($4.95)'}
                                                onChange={(event) => setSelectedValue5(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, please - ($4.95)</label>
                                        </div>

                                    </div>

                                </div>
                            </>
                        }

                        {/* Budget Tier 1's */}
                        {
                            service === "Budget Tier 1's" &&
                            <>
                                <div className='my-2 md:flex justify-between items-center'>
                                    <label className="font-semibold mr-2">Niche Preference</label>
                                    <select onChange={e => setNish(e.target.value)} className="select select-primary w-full max-w-md" required>
                                        <option disabled selected>General</option>
                                        <option>Apps</option>
                                        <option>Blogging</option>
                                        <option>Career</option>
                                        <option>Writing</option>
                                        <option>Fashion</option>
                                        <option>Finance</option>
                                        <option>Home and Real Estate</option>
                                        <option>Travel</option>
                                        <option>Fashion and Health</option>
                                        <option>Food</option>
                                        <option>Gaming</option>
                                        <option>Mommy</option>
                                        <option>Music</option>
                                        <option>News</option>
                                        <option>Tech</option>
                                    </select>
                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />I want.....</label>

                                    <div className='grid  '>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue6 === 'No Thanks'}
                                                onChange={(event) => setSelectedValue6(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="3 Budget Tier 1 Posts - ($59.00) "
                                                className="radio radio-primary"
                                                checked={selectedValue6 === '3 Budget Tier 1 Posts - ($59.00) '}
                                                onChange={(event) => setSelectedValue6(event.target.value)}
                                            />
                                            <label className='mx-2'>3 Budget Tier 1 Posts - ($59.00) </label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="5 Budget Tier 1 Posts - ($98.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue6 === '5 Budget Tier 1 Posts - ($98.00)'}
                                                onChange={(event) => setSelectedValue6(event.target.value)}
                                            />
                                            <label className='mx-2'>5 Budget Tier 1 Posts - ($98.00)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="10 Budget Tier 1 Posts - ($195.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue6 === '10 Budget Tier 1 Posts - ($195.00)'}
                                                onChange={(event) => setSelectedValue6(event.target.value)}
                                            />
                                            <label className='mx-2'>10 Budget Tier 1 Posts - ($195.00)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="15 Budget Tier 1 Posts - ($290.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue6 === '15 Budget Tier 1 Posts - ($290.00)'}
                                                onChange={(event) => setSelectedValue6(event.target.value)}
                                            />
                                            <label className='mx-2'>15 Budget Tier 1 Posts - ($290.00)</label>
                                        </div>
                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />Nofollow or Dofollow Only?</label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="I will take a nofollow site, but only if it is in my niche."
                                                className="radio radio-primary"
                                                checked={selectedValue7 === 'I will take a nofollow site, but only if it is in my niche.'}
                                                onChange={(event) => setSelectedValue7(event.target.value)}
                                            />
                                            <label className='mx-2'>I will take a nofollow site, but only if it is in my niche.</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="I don't want any nofollow links, even if they are niche related."
                                                className="radio radio-primary"
                                                checked={selectedValue7 === "I don't want any nofollow links, even if they are niche related."}
                                                onChange={(event) => setSelectedValue7(event.target.value)}
                                            />
                                            <label className='mx-2'>I don't want any nofollow links, even if they are niche related.</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="I don't care, just give me those links."
                                                className="radio radio-primary"
                                                checked={selectedValue7 === "I don't care, just give me those links."}
                                                onChange={(event) => setSelectedValue7(event.target.value)}
                                            />
                                            <label className='mx-2'>I don't care, just give me those links.</label>
                                        </div>

                                    </div>

                                </div>

                                <div className='my-2 md:flex justify-between items-center'>
                                    <label className="font-semibold mr-2">URLs and Associated Keywords</label>
                                    <textarea type="text" className='textarea textarea-primary w-full min-h-[100px] max-w-md' />
                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />We can drip contextual links over the course of 14 or 30 days. Links are distributed randomly to the live link URLs we create for you at a rate of roughly 40-60 links per day. These are good for improving indexing and pushing some juice to those new links/citations that are built for you.</label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue8 === 'No Thanks'}
                                                onChange={(event) => setSelectedValue8(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue8 === "Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)"}
                                                onChange={(event) => setSelectedValue8(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue8 === "Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)"}
                                                onChange={(event) => setSelectedValue8(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)</label>
                                        </div>

                                    </div>

                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />We will send multiple Google crawlers to your fresh links over a period of 3 weeks.</label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue9 === 'No Thanks'}
                                                onChange={(event) => setSelectedValue9(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, please. - ($4.95)"
                                                className="radio radio-primary"
                                                checked={selectedValue9 === 'Yes, please. - ($4.95)'}
                                                onChange={(event) => setSelectedValue9(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, please. - ($4.95)</label>
                                        </div>

                                    </div>

                                </div>
                            </>
                        }
                        {
                            service === "Citation Cleanup & Boost" &&
                            <>
                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />Do you need a Citation Audit to see how many edits are needed first?</label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, I'm not sure how many inaccurate citations are out there - ($14.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue10 === "Yes, I'm not sure how many inaccurate citations are out there - ($14.99)"}
                                                onChange={(event) => setSelectedValue10(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, I'm not sure how many inaccurate citations are out there - ($14.99)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No, I will upload the full list to my order below."
                                                className="radio radio-primary"
                                                checked={selectedValue10 === 'No, I will upload the full list to my order below.'}
                                                onChange={(event) => setSelectedValue10(event.target.value)}
                                            />
                                            <label className='mx-2'>No, I will upload the full list to my order below.</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-4 md:flex justify-between items-center'>
                                    <label className="font-semibold mr-2">How many citations do you need cleaned up? <span className='text-sm text-red-500'>(@ 0.99 Plus $20 - Setup Cost)</span></label>
                                    <input min={1} type="number" className='input input-primary w-full max-w-md' />
                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />Add on extra Hyper Local citations to your order if you'd us to complete them alongside your campaign. </label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue11 === "No Thanks"}
                                                onChange={(event) => setSelectedValue11(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="40 Done-For-You Citations - ($39.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue11 === '40 Done-For-You Citations - ($39.00)'}
                                                onChange={(event) => setSelectedValue11(event.target.value)}
                                            />
                                            <label className='mx-2'>40 Done-For-You Citations - ($39.00)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="80 Done-For-You Citations - ($74.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue11 === '80 Done-For-You Citations - ($74.00)'}
                                                onChange={(event) => setSelectedValue11(event.target.value)}
                                            />
                                            <label className='mx-2'>80 Done-For-You Citations - ($74.00)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="150 Done-For-You Citations - ($139.00)"
                                                className="radio radio-primary"
                                                checked={selectedValue11 === '150 Done-For-You Citations - ($139.00)'}
                                                onChange={(event) => setSelectedValue11(event.target.value)}
                                            />
                                            <label className='mx-2'>150 Done-For-You Citations - ($139.00)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />Add on extra Hyper Local citations to your order if you'd us to complete them alongside your campaign. </label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue12 === "No Thanks"}
                                                onChange={(event) => setSelectedValue12(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue12 === 'Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)'}
                                                onChange={(event) => setSelectedValue12(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, drip contextual links to the properties you set up for me for 14 days - ($29.99)</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)"
                                                className="radio radio-primary"
                                                checked={selectedValue12 === 'Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)'}
                                                onChange={(event) => setSelectedValue12(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, drip contextual links to the properties you set up for me for 30 days - ($59.99)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-8'>
                                    <label className="font-semibold mr-2"><ImArrowRight className='inline-block text-xl mr-2' />Add on extra Hyper Local citations to your order if you'd us to complete them alongside your campaign. </label>

                                    <div className=''>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="No Thanks"
                                                className="radio radio-primary"
                                                checked={selectedValue13 === "No Thanks"}
                                                onChange={(event) => setSelectedValue13(event.target.value)}
                                            />
                                            <label className='mx-2'>No Thanks</label>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <input
                                                type="radio"
                                                value="Yes, please. - ($4.95)"
                                                className="radio radio-primary"
                                                checked={selectedValue13 === "Yes, please. - ($4.95)"}
                                                onChange={(event) => setSelectedValue13(event.target.value)}
                                            />
                                            <label className='mx-2'>Yes, please. - ($4.95)</label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Total Price ($)</label>
                            <input type="number" readOnly value={totalPrice} className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Coupon Code</label>
                            <input type="text" className='input input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Upload File</label>
                            <input type="file" className='file-input file-input-primary w-full max-w-md' />
                        </div>
                        <div className='my-2 md:flex justify-between items-center'>
                            <label className="font-semibold mr-2">Comment</label>
                            <textarea type="text" className='textarea textarea-primary w-full min-h-[100px] max-w-md' />
                        </div>
                        <div className='md:flex items-center justify-between mt-6'>
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