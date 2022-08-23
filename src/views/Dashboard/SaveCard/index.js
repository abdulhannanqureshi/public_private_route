import React from 'react'
const SaveCard = () =>
{
    return (
      <>
        <div className='payment-method'>
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-4'>
              {/* <h6 className='font-medium text-lg mb-4'>Select Payment Method</h6> */}
              <div className='form-check flex items-center rounded bg-gray-100 px-4 py-2 mb-3 w-full'>
                <input
                  className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                  type='radio'
                  checked
                  name='flexRadioDefault'
                  id='card1'
                />
                <label
                  className='form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center'
                  for='card1'
                >
                  <img
                    src='./images/mastercard.png'
                    className='w-12 ml-2 mr-4'
                  />
                  <div className=''>
                    <span className='card-number block text-sm font-medium'>
                      5225 XXXX XXXX 6246
                    </span>
                    <span className='card-name block text-sm'>MasterCard</span>
                  </div>
                  <span className='delete ml-auto hover:text-red-500'>
                    <i className='fa fa-trash-alt' aria-hidden='true'></i>
                  </span>
                </label>
              </div>
              <div className='form-check flex items-center rounded bg-gray-100 px-4 py-2 mb-3 w-full'>
                <input
                  className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                  type='radio'
                  name='flexRadioDefault'
                  id='card2'
                />
                <label
                  className='form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center'
                  for='card2'
                >
                  <img src='./images/visacard.png' className='w-12 ml-2 mr-4' />
                  <div className=''>
                    <span className='card-number block text-sm font-medium'>
                      4242 XXXX XXXX 4242
                    </span>
                    <span className='card-name block text-sm'>VISA</span>
                  </div>
                  <span className='delete ml-auto hover:text-red-500'>
                    <i className='fa fa-trash-alt' aria-hidden='true'></i>
                  </span>
                </label>
              </div>

              <div className='flex justify-between mt-6'>
                <button
                  type='button'
                  className='blue-btn py-2 px-4 rounded'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter'
                >
                  Add New Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default SaveCard