import React from 'react'
import CounterNumber from '../../../components/Counter/counter';


// import ScrollUpButton from "react-scroll-up-button";
const CounterNumerals = (props) => {
    const { DataFake } = props


    return (
      <>
        <div className='grid grid-cols-4 content-center justify-items-center  text-white'>
          {DataFake && DataFake.length
            ? DataFake.map((item) => {
                return (
                  <>
                    <div className='content-center justify-items-center text-center py-5'>
                      <div className='py-5 my-3'>
                        <span className='text-4xl'>
                          <i className={item.icons} />
                        </span>
                      </div>
                      <h5 className='hoverZoomInOut'>{item.title}</h5>
                      <CounterNumber sending={item.quantity} />
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </>
    );
}
export default CounterNumerals