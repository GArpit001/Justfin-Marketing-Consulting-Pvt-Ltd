import React from 'react'
import "../App.css"
import Happy from "../assets/happycustomer.svg"
import Location from "../assets/citiescovered.svg"
import Branches from "../assets/branches.svg"
import Disbursed from "../assets/disbursal.svg"

import PersonalLoan from "../assets/personalloanicon.svg"
import HomeLoan from "../assets/homeloanicon.svg"
import BusinessLoan from "../assets/autoloanicon.svg"
import OverDraft from "../assets/creditcardicon.svg"

const Home = () => {
  
  let loan = ["Loans", "Personal Loan", "OverDraft", "Home Loan", "Business Loan"]



  return (
    <div className="homeBg h-[556px]">

      <div className="px-26 py-18 ">
        <div>
          <div>
            <h2 className="text-white text-5xl mb-7 ">Upgrade the Way</h2>
            <span className="text-white text-5xl">You Choose</span>
            <span className="text-[#2EE5A2] text-5xl ml-3" id="loanChange" > LOAN </span>

          </div>

          <div className="mt-12 flex gap-36">

            <div className='flex items-center gap-4'>
              <div>
                <img src={Happy} alt="Happy Customers" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold">5.8 Lacs <span className='text-[#2EE5A2]'>+</span> </h3>
                <h3 className='text-gray-300'>Customers Annually</h3>
              </div>
            </div>


            <div className='flex items-center gap-4'>
              <div>
                <img src={Location} alt="Happy Customers" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold">150 <span className='text-[#2EE5A2]'>+</span> </h3>
                <h3 className='text-gray-300'>Cities Covered</h3>
              </div>
            </div>


            <div className='flex items-center gap-4'>
              <div>
                <img src={Branches} alt="Happy Customers" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold">587 <span className='text-[#2EE5A2]'>+</span> </h3>
                <h3 className='text-gray-300'>Branches</h3>
              </div>
            </div>



            <div className='flex items-center gap-4'>
              <div>
                <img src={Disbursed} alt="Happy Customers" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold">61,000 <span className='text-[#2EE5A2]'>Cr+</span> </h3>
                <h3 className='text-gray-300'>Disbursed Annually</h3>
              </div>
            </div>

          </div>
        </div>



        <div className="cardComponent mt-16">

          <div className='flex gap-6'>

            <div className='flex gap-6 border border-[#cdcdcd9a] rounded-2xl px-4 py-6 bg-[#515151bd] w-[25%]'>

              <div className="pt-[10px]">
                <img src={PersonalLoan} className="w-[40px]" alt="Happy Customers" />
              </div>

              <div className="flex flex-col gap-3" >
                <h1 className='text-2xl font-semibold text-white'>Personal Loan</h1>

                <h2 className='text-[#a7a7a7] font-semibold'>Paperless process at low rate</h2>

                <button className='border border-white rounded-3xl text-white py-2 cursor-pointer font-semibold'>
                  Apply Now <i class="ri-arrow-right-s-line"></i>
                </button>

              </div>

            </div>



            <div className='flex gap-6 border border-[#cdcdcd9a] rounded-2xl px-4 py-6 bg-[#515151bd] w-[25%]'>

              <div className="pt-[10px]">
                <img src={HomeLoan} className="w-[40px]" alt="Happy Customers" />
              </div>

              <div className="flex flex-col gap-3" >
                <h1 className='text-2xl font-semibold text-white'>Home Loan</h1>

                <h2 className='text-[#a7a7a7] font-semibold'>Instant approval at lowest interest rates</h2>

                <button className='border border-white rounded-3xl text-white py-2 cursor-pointer font-semibold'>
                  Apply Now <i class="ri-arrow-right-s-line"></i>
                </button>

              </div>

            </div>



            <div className='flex gap-6 border border-[#cdcdcd9a] rounded-2xl px-4 py-6 bg-[#515151bd] w-[25%] '>

              <div className="pt-[10px]">
                <img src={BusinessLoan} className="w-[40px]" alt="Happy Customers" />
              </div>

              <div className="flex flex-col gap-3" >
                <h1 className='text-2xl font-semibold text-white'>Business Loan</h1>

                <h2 className='text-[#a7a7a7] font-semibold'>Instant approval at lowest interest rates</h2>

                <button className='border border-white rounded-3xl text-white py-2 cursor-pointer font-semibold'>
                  Apply Now <i class="ri-arrow-right-s-line"></i>
                </button>

              </div>

            </div>




            <div className='flex gap-6 border border-[#cdcdcd9a] rounded-2xl px-4 py-6 bg-[#515151bd] w-[25%]'>

              <div className="pt-[10px]">
                <img src={OverDraft} className="w-[40px]" alt="Happy Customers" />
              </div>

              <div className="flex flex-col gap-3" >
                <h1 className='text-2xl font-semibold text-white'>Over Draft</h1>

                <h2 className='text-[#a7a7a7] font-semibold'>Instant approval at lowest interest rates</h2>

                <button className='border border-white rounded-3xl text-white py-2 cursor-pointer font-semibold'>
                  Apply Now <i class="ri-arrow-right-s-line"></i>
                </button>

              </div>

            </div>






          </div>





        </div>





      </div>
    </div>
  )
}

export default Home