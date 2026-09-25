import React from 'react'
import PersonalLoan_LOGO from "../assets/newplbannerimg.svg"
import "../App.css"


const Personal_Loan = () => {
    return (
        <>

            <div className=" bgPanel">

                <div className=" flex justify-between px-22 pt-18">
                    <div className='flex flex-col gap-4 w-[60%]'>

                        <h1 className='text-5xl'>
                            Personal Loan Online :
                        </h1>

                        <h1 className='text-5xl'>
                            Apply & Get Instant Approval
                        </h1>

                        <h1 className='text-5xl'>
                            {/* Up to <span className="text-[#2EE5A2]"> $ 50 Lakh </span> */}
                            Up to <span className="text-[#2e5ce5]"> $ 50 Lakh </span>
                        </h1>

                        <p className='text-[15px] text-[#666666]'>
                            Apply for Personal Loan to fulfuill all your financial needs
                        </p>

                        <div className="mt-[15px] mb-[10px]">
                            <label className="block pb-[3px]">Enter Mobile Number</label>
                            <input type="number"  className="bg-[#E7E6E6] py-2 px-4 w-[50%] rounded-md focus:outline-none" placeholder="Enter Aadhar linked Mobile Number" />

                        </div>

                        <div className='w-[70%] flex gap-6'>
                            <input type='checkbox' className="" />

                            <p className="text-[10px]">I agree to the <span className='text-[#2e5ce5] cursor-pointer'>Terms and Conditions</span> of Justfin Marketing Consulting Private Limited & agree to receive promotional message from WhatApp/RCS/SMS</p>

                        </div>

                        <div>
                            <button className="bg-[#3B3B3B] text-white cursor-pointer px-12 py-4 rounded-2xl hover:bg-[#2e5ce5]">Apply Now <i class="ri-arrow-right-s-line"></i> </button>
                        </div>



                    </div>



                    <div>

                        <img src={PersonalLoan_LOGO} alt="" />


                    </div>
                </div>


                <div className=' bg-[#2e5ce5] text-white rounded-2xl relative top-18 mx-28'>

                    <div className="bgPanelbg flex justify-between py-10 px-28 ">

                        <div>

                            <div>
                                <h1 className='text-[#5f5f5f] font-semibold text-lg'>
                                    Cities Covered
                                </h1>
                            </div>

                            <div>
                                <h1 className="text-black font-bold text-2xl">
                                    Pan India
                                </h1>
                            </div>

                        </div>


                        <div>

                            <div>
                                <h1 className='text-[#5f5f5f] font-semibold text-lg'>
                                    Happy Customers
                                </h1>
                            </div>

                            <div>
                                <h1 className="text-black font-bold text-2xl">
                                    1 Lacs+
                                </h1>
                            </div>

                        </div>

                        <div>

                            <div>
                                <h1 className='text-[#5f5f5f] font-semibold text-lg'>
                                    Banking Partners
                                </h1>
                            </div>

                            <div>
                                <h1 className="text-black font-bold text-2xl">
                                    158+
                                </h1>
                            </div>

                        </div>


                        <div>

                            <div>
                                <h1 className='text-[#5f5f5f] font-semibold text-lg'>
                                    Disbursed Annually
                                </h1>
                            </div>

                            <div>
                                <h1 className="text-black font-bold text-2xl">
                                    ₹53 BN
                                </h1>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="bg-[#3B3B3B] px-26 pt-32 pb-10 text-center flex flex-col gap-4 text-white  ">

                    <h1 className=" text-5xl font-semibold mb-10">
                        What is a <span className="text-[#2e5ce5]"> Personal Loan ? </span>
                    </h1>

                    <p>
                        A quick and easy way to deal with financial emergencies is a Personal Loan. Simply put, it is fundraising, so you don't have to worry about collateral. Your background does not matter. You could be a salaried professional, a self-employed entrepreneur, or a retired personnel. Your loan is customised to your needs.
                    </p>
                    <p>

                        Through Urban Money, enjoy instant funds, disbursal in as little as 24 hours, and flexible terms. Compare among 50+ banks and NBFCs to match a term favourable to you. Share your contact details, and we'll take care of the rest.
                        Fast-track your planning with a user-friendly EMI and eligibility calculator tool.
                    </p>
                    <p>
                        So if you're aiming for a simple and convenient financing experience, a Personal Loan from Urban Money could be your ideal financial companion
                    </p>

                </div>


                <div className='bg-black text-white px-22 py-10 flex flex-col gap-4'>

                    <div className='text-lg font-semibold'>
                        <h1>Personal Loan at a Glance: Key Details</h1>

                    </div>

                    <div className='flex gap-8 w-[100%] flex-wrap'>

                        <div className="flex justify-center items-center gap-4 w-[25%]">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>1</span>
                            </div>
                            <div>
                                <h2>Loan Type</h2>
                                <p>Unsecured (No collateral required)</p>
                            </div>

                        </div>


                        <div className="flex justify-center items-center gap-4">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>2</span>
                            </div>
                            <div>
                                <h2>Loan Amount</h2>
                                <p>₹10,000 to ₹50 Lakhs</p>
                            </div>

                        </div>


                        <div className="flex justify-center items-center gap-4 w-[25%]">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>3</span>
                            </div>
                            <div>
                                <h2>Interest Rate</h2>
                                <p>Starting from 9.75% p.a.</p>
                            </div>

                        </div>




                        <div className="flex justify-center items-center gap-4 w-[25%]">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>4</span>
                            </div>
                            <div>
                                <h2>Repayment Tenure</h2>
                                <p>12 to 84 months</p>
                            </div>

                        </div>


                        <div className="flex justify-center items-center gap-4 w-[25%]">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>5</span>
                            </div>
                            <div>
                                <h2>Usage Flexibility</h2>
                                <p>No end-use restrictions</p>
                            </div>

                        </div>


                        <div className="flex justify-center items-center gap-4 w-[25%]">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>6</span>
                            </div>
                            <div>
                                <h2>Available In</h2>
                                <p>50+ cities across 18+ states</p>
                            </div>

                        </div>


                        <div className="flex justify-center items-center gap-4 w-[25%]">
                            <div>
                                <span className='bg-[#2e5ce5] block px-2 rounded-4xl'>7</span>
                            </div>
                            <div>
                                <h2>Support</h2>
                                <p>Expert guidance throughout the process</p>
                            </div>

                        </div>









                    </div>


                </div>

            </div>

        </>
    )
}

export default Personal_Loan