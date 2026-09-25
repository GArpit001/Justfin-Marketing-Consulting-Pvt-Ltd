import React from "react";
import logo from "../assets/cropped-download.svg"
import { Link } from "react-router-dom"
import "../App.css"

const Navbar = () => {
    return (

        <nav className="bg-[#F9F9F9] border-b-1 " >
            <div className=" px-12 py-2 flex justify-between items-center">
                <div> 
                    <img src={logo} title="JUSTFIN MARKETING & CONSULTING PVT LTD" className="w-[150px]" alt="" />
                </div>
                <div>
                    <ul className="flex gap-6"> 
                        <Link className="cursor-pointer font-semibold hover:text-blue-700 hover:underline" to="/personal_loan" >Personal Loan</Link>
                        <Link className="cursor-pointer font-semibold hover:text-blue-700 hover:underline" to="/home_loan" >Home Loan</Link>
                        <Link className="cursor-pointer font-semibold hover:text-blue-700 hover:underline" to="/business_loan" >Business Loan</Link>
                        <Link className="cursor-pointer font-semibold hover:text-blue-700 hover:underline" to="/over_draft" >Over Draft </Link>
                    </ul>
                </div>
                <div>
                    <button className="border bg-white cursor-pointer font-medium px-8 py-1.5 border-black rounded-3xl hover:bg-black hover:text-white duration-300 ease-in" >
                        Login
                    </button>
                </div>
            </div>
        </nav>


    )

}


export default Navbar;