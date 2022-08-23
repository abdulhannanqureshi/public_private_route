import React from 'react'
import SuscriptionBox from '../../../components/suscriptionBox.js'
const BannerSection = () =>
{
    return(
        <>
        <section className='home-topsec flex items-center text-center relative'>
            <div className='container mx-auto px-4 text-white relative'>
                <h1 className="mb-0">Enlightenment At Your Fingertip</h1>
                <h5>Start your personal journey today.</h5>
                <div className='subscribe-banner mt-8'>
                    <p className='text-white'>Ready to get learn? Enter your email below to get things kicked off</p>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-2 col-start-3">
                            <SuscriptionBox />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default BannerSection