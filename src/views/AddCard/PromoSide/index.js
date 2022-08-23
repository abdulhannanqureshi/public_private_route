import React from 'react'
import InputForms from '../../../common/inputForm'
import coupanImage from '../../../assets/Images/Addcart/coupanDiscount.png'
const PromoInput = () => {
    return (
        <>
            <div id="summary" className=" px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-2">
                    <span className="font-semibold text-sm uppercase">Items 3</span>
                    <span className="font-semibold text-sm">590$</span>
                </div>
                <div className="py-5">
                    <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <InputForms
                        className="flex items-center relative"
                        type='email'
                        name="email"
                        // value={formState.values.email || ""}
                        src={coupanImage}
                        // errorMessage={hasError("email") ?
                        //     formState.errors.email[0] : null}
                        // onChange={handleChange}
                        placeholder="Enter your code"
                    />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total Amount</span>
                        <span>$600</span>
                    </div>
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Discount Applied</span>
                        <span>$600</span>
                    </div>
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Grand Total</span>
                        <span>$600</span>
                    </div>
                    <button className="bg-theme-color font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
            </div>
        </>
    )
}
export default PromoInput