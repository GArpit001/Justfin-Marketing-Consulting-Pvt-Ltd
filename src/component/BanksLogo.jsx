import React from 'react'
import Axis from "../assets/AXISFINANCE.svg"

const BanksLogo = () => {
    return (
       <section className="relative overflow-hidden bg-white px-4 md:px-8 lg:px-12 max-w-300 mx-auto mt-10 lg:mt-5 lg:pb-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/4 bg-linear-to-r from-white via-white/80 to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/6 bg-linear-to-l from-white via-white/80 to-transparent"></div>
        <div className="flex w-max">
            <div className="flex items-center gap-8 md:gap-12 lg:gap-14 animate-home-marquee-scroll">

                <div className="shrink-0" aria-label="AXIS FINANCE">
                    <img alt="AXIS FINANCE" loading="lazy" width="110" height="40" decoding="async" data-nimg="1" className="h-8 w-auto object-contain text-transparent" src={Axis} />
                </div>

            </div>

        </div>
        
        </section>
    )
}

export default BanksLogo
