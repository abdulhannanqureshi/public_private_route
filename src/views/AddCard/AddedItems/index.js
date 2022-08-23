import React, { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const Addeditems = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
      let data = JSON.parse(localStorage.getItem("cart"));
      if (data && data.length) {
        setItems(data);
      }
    }, []);

    const deleteItem = (index) => {
      let cartData = [...items];
      cartData.splice(index, 1);
      setItems(cartData);
      localStorage.setItem("cart", JSON.stringify(cartData));
    };

    return (
      <>
        <div className='px-10 py-10'>
          <div className='flex justify-between border-b pb-3 '>
            <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
            <h2 className='font-semibold text-2xl'>{items.length} Items</h2>
          </div>
          <div className='flex mt-10 mb-5'>
            <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
              Product Image
            </h3>
            <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
              Product Details
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Total
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Remove Item
            </h3>
          </div>

          {items && items.length ? (
            items.map((cartItem, index) => {
              return (
                <div
                  className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'
                  key={cartItem.id}
                >
                  <div className='flex w-2/5'>
                    <div className=''>
                      <img
                        className='h-24 cartImage'
                        src={cartItem.courseImage}
                      />
                    </div>
                  </div>
                  <div className='flex w-2/5'>
                    <div className='flex flex-col justify-between  flex-grow'>
                      <span className='font-bold text-sm'>
                        {cartItem.courseName}
                      </span>
                    </div>
                  </div>
                  <span className='text-center w-1/5 font-semibold text-sm'>
                    ${cartItem.coursePrice}
                  </span>
                  <div className='flex justify-center w-1/5'>
                    <i
                      className='fa-solid fa-trash-can delete-button'
                      onClick={() => deleteItem(index)}
                      data-tip='Remove item'
                    />
                    <ReactTooltip />
                  </div>
                </div>
              );
            })
          ) : (
            <div className='empty_cart text-center mt-16'>
              <img
                src='./images/shopping-cart.png'
                alt=''
                className='mx-auto w-16 mb-2'
              />
              <h5>Your Cart is Empty</h5>
              <Link to='/my-courses'>
                <button className='mx-auto bg-theme-color hover:bg-blue-700 px-4 py-2 rounded text-white'>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          {/* <Link to="/marketplace" className="flex font-semibold text-indigo-600 text-sm mt-10">
                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                    Continue Shopping
                </Link> */}
        </div>
      </>
    );
}
export default Addeditems