import React from 'react'
import SuscriptionBox from '../suscriptionBox.js'

const Newsletter = () => {
  return (
    <div className='sec-padding bg-light-gray newsletter-sec'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-4'>
                <div className='col-span-2 col-start-2'>
                    <div className='text-center'>
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Your download should start automatically, if not Click here. Should I give up.</p>
                        <SuscriptionBox />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
