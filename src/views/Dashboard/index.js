import React, { useState, useEffect, useRef } from 'react';
import { Toaster } from '../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { AddNewCardSchema } from "../../validators";
import { TabGroup } from '@statikly/funk'
import InnerPageBanner from '../../components/InnerPageBanner'
import ProfileSetting from './ProfileSetting';
import ChangePassword from './ChnagePassword';
import MyTransactions from './MyTransactions';
import TransactionData from './DataFake/TransactionData';
import InputForms from '../../common/inputForm';
import { CardSavingschema } from '../../validators/SaveCard';
// import Cards from 'reactjs-credit-card';
// import 'react-credit-cards/lib/styles.scss';

import InputMask from 'react-input-mask';
import ReactTooltip from 'react-tooltip';

const Dashboard = () => {
    ///Hanndling modal here
    const [showModal, setShowModal] = React.useState(false);
    const modalOpen = () => {
        setShowModal(true)
    }

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });
    const [cardSaved, setCardSaved] = useState([])
    const [addedCard, setAddedCard] = useState([]);

    useEffect(() => {
        let addedCard = JSON.parse(localStorage.getItem("addNewCard"));
        setAddedCard(addedCard);
    }, [cardSaved]);

    ///For validating error everytime change in inputs
    const handleError = () => {
        const errors = validate(formState.values, AddNewCardSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }

    ///Handle change for storing input values to state.
    const handleChange = (event) => {
        event.persist();
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value,
            },
            errors:
            {
                ...formState.errors,
                [event.target.name]: false
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    ///Submiting values to api.
    const handleSubmit = async (event) => {
        event.preventDefault();
        handleError()
        if (formState.isValid) {
            const { card_number } = formState.values;
            let addNewCard = JSON.parse(localStorage.getItem("addNewCard"));
            if (addNewCard) {
                const result = addNewCard.map(e => e.card_number);
                const foundCard = result.includes(card_number)
                if (foundCard) {
                    Toaster({
                        type: "error",
                        text: "You have already added this card."
                    })

                }
                else {
                    Toaster({
                        type: "success",
                        text: "New Card added Successfully."
                    })
                    // localStorage.removeItem("addNewCard");
                    let tempArray = addNewCard;
                    tempArray.push(formState.values);
                    localStorage.setItem("addNewCard", JSON.stringify(tempArray));
                    setCardSaved(tempArray)
                    setShowModal(false)
                }
            } else {
                let tempArray = [];
                tempArray.push(formState.values);
                localStorage.setItem("addNewCard", JSON.stringify(tempArray));

                {
                    Toaster({
                        type: "success",
                        text: "New Card added Successfully."
                    })
                    setCardSaved(tempArray)
                    setShowModal(false)
                }
            }

        }
        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    };

    const handleDelete = (card_number) => {
        let addedCard = JSON.parse(localStorage.getItem("addNewCard"));
        let remainingItems = addedCard.filter(function (obj) {
            return obj.card_number !== card_number;
        });
        localStorage.setItem("addNewCard", JSON.stringify(remainingItems));
        setCardSaved(remainingItems)

    }

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    return (
      <>
        <main className='bg-gray-100'>
          <InnerPageBanner title={"Account Setting"} />
          <section className='account-setting-sec'>
            <div className='container m-auto px-4 sec-padding'>
              <TabGroup numTabs={3} direction={TabGroup.direction.VERTICAL}>
                <div className='grid grid-cols-4 gap-4'>
                  <div className=''>
                    <div className='tablist bg-white'>
                      <TabGroup.TabList>
                        <TabGroup.Tab
                          index={0}
                          className='w-full text-left py-3 px-4 focus-visible:none'
                          activeClassName='bg-blue-gradient text-white'
                          inactiveClassName='text-black'
                        >
                          <i className='fas fa-user'></i>
                          Profile Setting
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={1}
                          className='w-full text-left py-3 px-4'
                          activeClassName='bg-blue-gradient text-white'
                          inactiveClassName='text-black'
                        >
                          <i className='fas fa-lock'></i>
                          Change Password
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={2}
                          className='w-full text-left py-3 px-4'
                          activeClassName='bg-blue-gradient text-white'
                          inactiveClassName='text-black'
                        >
                          <i className='fas fa-exchange-alt'></i>
                          My Transactions
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={3}
                          className='w-full text-left py-3 px-4'
                          activeClassName='bg-blue-gradient text-white'
                          inactiveClassName='text-black'
                        >
                          <i className='fas fa-credit-card'></i>
                          {/* <FontAwesomeIcon icon="fas fa-credit-card" /> */}
                          Save Payment
                        </TabGroup.Tab>
                      </TabGroup.TabList>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='tabpanel bg-white p-4'>
                      <TabGroup.TabPanel
                        index={0}
                        className='transition-all transform'
                        activeClassName='opacity-100 duration-500 translate-x-0'
                        inactiveClassName='absolute opacity-0 -translate-x-2'
                      >
                        <h4 className='account-title mb-6 pb-2'>
                          Profile Setting
                        </h4>
                        <ProfileSetting />
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={1}
                        className='transition-all transform'
                        activeClassName='opacity-100 duration-500 translate-x-0'
                        inactiveClassName='absolute opacity-0 -translate-x-2'
                      >
                        <h4 className='account-title mb-6 pb-2'>
                          Change Password
                        </h4>
                        <ChangePassword />
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={2}
                        className='transition-all transform'
                        activeClassName='opacity-100 duration-500 translate-x-0'
                        inactiveClassName='absolute opacity-0 -translate-x-2'
                      >
                        <h4 className='account-title mb-6 pb-2'>
                          My Transactions
                        </h4>
                        <MyTransactions />
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={3}
                        className='transition-all transform'
                        activeClassName='opacity-100 duration-500 translate-x-0'
                        inactiveClassName='absolute opacity-0 -translate-x-2'
                      >
                        <div className='account-title mb-6 pb-2'>
                          <div className='flex justify-between items-center'>
                            <h4 className='mb-0'>Save Payment</h4>
                            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add Card</button> */}
                          </div>
                        </div>

                        <div className='payment-method'>
                          <div className='grid grid-cols-6 gap-4'>
                            <div className='col-span-6'>
                              {/* <h6 className='font-medium text-lg mb-4'>Select Payment Method</h6> */}
                              {addedCard && addedCard.length ? (
                                <>
                                  {addedCard.map((cardItem, i) => (
                                    <div className='form-check flex items-center rounded bg-gray-100 px-4 py-2 mb-3 w-full'>
                                      <input
                                        className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                                        type='radio'
                                        checked
                                        name='flexRadioDefault'
                                        id={`Card${i}`}
                                      />
                                      <label
                                        className='form-check-label inline-block cursor-pointer text-gray-800 flex w-full items-center'
                                        for={`Card${i}`}
                                      >
                                        <img
                                          src='./images/mastercard.png'
                                          className='w-12 ml-2 mr-4'
                                        />
                                        <div className=''>
                                          <span className='card-number block text-sm font-medium'>
                                            {cardItem.card_number}
                                          </span>
                                          <span className='card-name block text-sm'>
                                            MasterCard
                                          </span>
                                        </div>
                                        <span className='delete ml-auto hover:text-red-500'>
                                          <i
                                            className='fa fa-trash-alt'
                                            aria-hidden='true'
                                            onClick={() => {
                                              handleDelete(
                                                cardItem.card_number
                                              );
                                            }}
                                          ></i>
                                        </span>
                                      </label>
                                    </div>
                                  ))}
                                  <div className='flex justify-between mt-6'>
                                    <button
                                      type='button'
                                      className='blue-btn py-2 px-4 rounded'
                                      data-bs-toggle='modal'
                                      data-bs-target='#exampleModalCenter'
                                      onClick={modalOpen}
                                    >
                                      Add New Card
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <div className='text-center'>
                                  <img
                                    src='./images/no-credit-card.png'
                                    className='w-16 mx-auto pb-2'
                                  />
                                  <p>There are no card added.</p>
                                  <div className='mt-6'>
                                    <button
                                      type='button'
                                      className='blue-btn py-2 px-4 rounded'
                                      data-bs-toggle='modal'
                                      data-bs-target='#exampleModalCenter'
                                      onClick={modalOpen}
                                    >
                                      Add New Card
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </TabGroup.TabPanel>
                    </div>
                  </div>
                </div>
              </TabGroup>
            </div>
          </section>
        </main>

        {showModal ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-lg'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'>
                    <h5
                      className='text-xl font-medium leading-normal text-gray-800 mb-0'
                      id='exampleModalScrollableLabel'
                    >
                      Add New Card
                    </h5>
                    <button
                      type='button'
                      className='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                      data-bs-dismiss='modal'
                      onClick={() => setShowModal(false)}
                      aria-label='Close'
                    ></button>
                  </div>
                  {/*body*/}
                  <form onSubmit={handleSubmit}>
                    <div className='relative p-4 flex-auto'>
                      <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12'>
                          <label className='block font-medium mb-2 text-gray-700'>
                            Card Number<span className='required'>*</span>
                          </label>
                          <InputMask
                            className='bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full'
                            mask='9999 9999 9999 9999'
                            maskChar={null}
                            name='card_number'
                            placeholder='9999 9999 9999 9999'
                            value={formState.values.card_number || ""}
                            onChange={handleChange}
                            onBlur={handleError}
                            // onChange={handleInput}
                          />
                          <span className='error text-red-500 text-sm font-medium'>
                            {hasError("card_number")
                              ? formState.errors.card_number[0]
                              : null}
                          </span>
                        </div>
                        <div className='col-span-5 expiry_date'>
                          <label className='block font-medium mb-2 text-gray-700'>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                              Expiry
                            </span>
                          </label>
                          <div className='flex gap-3'>
                            <div className=''>
                              <select
                                className='bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full'
                                name='expiry_month'
                                value={formState.values.expiry_month || ""}
                                onChange={handleChange}
                              >
                                <option selected>MM</option>
                                <option value='01'>01</option>
                                <option value='02'>02</option>
                                <option value='03'>03</option>
                                <option value='04'>04</option>
                                <option value='05'>05</option>
                                <option value='06'>06</option>
                                <option value='07'>07</option>
                                <option value='08'>08</option>
                                <option value='09'>09</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                              </select>
                              <div>
                                <span className='error text-red-500 text-sm font-medium'>
                                  {hasError("expiry_month")
                                    ? formState.errors.expiry_month[0]
                                    : null}
                                </span>
                              </div>
                            </div>
                            <div className=''>
                              <select
                                className='bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full'
                                name='expiry_year'
                                value={formState.values.expiry_year || ""}
                                onChange={handleChange}
                              >
                                <option selected>YY</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                              </select>
                              <div>
                                <span className='error text-red-500 text-sm font-medium'>
                                  {hasError("expiry_year")
                                    ? formState.errors.expiry_year[0]
                                    : null}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className=''>
                                            <label className="block font-medium mb-2 text-gray-700">Expiry<span className="required">*</span></label>
                                            <InputMask
                                                className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full"
                                                mask="99/99"
                                                name="expiry"
                                                maskChar={null}
                                                placeholder="MM/YY"
                                                value={formState.values.expiry || ""}
                                                onChange={handleChange}
                                                onBlur={handleError}
                                            />
                                            <span className='error text-red-500 text-sm font-medium'>
                                                {hasError("expiry") ?
                                                    formState.errors.expiry[0] : null}
                                            </span>
                                        </div> */}

                        <div className='col-span-3'>
                          <label className='block font-medium mb-2 text-gray-700'>
                            CVV / CVC<span className='required'>*</span>
                          </label>
                          <div className='cvv_input relative'>
                            <InputMask
                              className='bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full'
                              mask='9999'
                              name='cvv'
                              maskChar={null}
                              type='password'
                              placeholder='***'
                              value={formState.values.cvv || ""}
                              onChange={handleChange}
                              onBlur={handleError}
                            />
                            <span className='absolute input_datatip'>
                              <i
                                className='fas fa-question-circle'
                                data-tip='The CVV / CVC Number is the last 3 or 4 digits on the back of your cards'
                              />
                              <ReactTooltip />
                            </span>
                          </div>
                          <span className='error text-red-500 text-sm font-medium'>
                            {hasError("cvv") ? formState.errors.cvv[0] : null}
                          </span>
                        </div>
                        {/* <div className='col-span-12'>
                                            <button type="submit" className="blue-btn py-2 px-8" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Save</button>
                                        </div> */}
                      </div>
                    </div>
                    <div className='modal-footer flex flex-shrink-0 flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md'>
                      <button
                        type='submit'
                        className='blue-btn py-2 px-8'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'
                      >
                        Save Card
                      </button>
                      <button
                        type='button'
                        onClick={() => setShowModal(false)}
                        className='red-btn ml-4 py-2 px-8'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </>
    );
}

export default Dashboard
