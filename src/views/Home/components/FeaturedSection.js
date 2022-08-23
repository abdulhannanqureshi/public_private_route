import React from 'react'

const FeaturedSection = () => {
  return (
    <>
    <section className='featured-sec sec-padding'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-12 gap-4 items-center featured-content'>
            <div className=' col-span-6 md:w-11/12'>
                <h2 className=''>Course Details Features</h2>
                <p>
                You Don’t Need Additional Plugins. Just Drag an Element, Configure it and Launch Your Site.
                </p>
                <ul className='mt-6'>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check-blue.png" className='w-5 mr-2' alt="" />
                  Dashboard For Student & Instructor</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check-blue.png" className='w-5 mr-2' alt="" />
                  Work Schedule For Each Student</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check-blue.png" className='w-5 mr-2' alt="" />
                  Days with Custom Schedule</li>
                </ul>
            </div>
            <div className='col-span-6 featured-image md:ml-auto md:w-11/12'>
                <img className="w-full object-cover rounded-md" src="./images/education.jpg" alt='' />
            </div>
        
            <div className='col-span-6 featured-image  md:w-11/12 py-6'>
                <img className="w-full object-cover rounded-md" src="./images/course-details-1.jpg" alt='' />
            </div>
            <div className='col-span-6 md:ml-auto md:w-11/12'>
                <h2 className=''>Course Search Feature</h2>
                <p>
                You Don’t Need Additional Plugins. Just Drag an Element, Configure it and Launch Your Site.
                </p>
                <ul className='mt-6'>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check-blue.png" className='w-5 mr-2' alt="" />
                  Dashboard For Student & Instructor</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check-blue.png" className='w-5 mr-2' alt="" />
                  Work Schedule For Each Student</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check-blue.png" className='w-5 mr-2' alt="" />
                  Days with Custom Schedule</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FeaturedSection
