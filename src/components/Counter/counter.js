import React, { useState } from 'react';
import CountUp  from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const CounterNumbers=(props)=>

{
    const [start,setstart]=useState(props)
    return(
        <>
          <h2>
                    <CountUp start={0} end={props.sending} delay={0}>
                        {({ countUpRef,start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef}  />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span className='pl-2 '>+</span>
            </h2>
        </>
    )
}
export default CounterNumbers