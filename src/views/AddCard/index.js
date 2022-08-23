import React from 'react';
import InnerPageBanner from "../../components/InnerPageBanner";
import Addeditems from './AddedItems'
import PromoInput from './PromoSide';
import AddcardDummy from './Data';
const AddCard = () => {
    return (
      <>
        <main className='bg-gray-100'>
          <InnerPageBanner title={"Add Cart"} />
          <section className='sec-padding'>
            <div className='container container-small mx-auto px-5 '>
              <div className='grid grid-cols-12 box_shadow'>
                <div className='col-span-8 bg-white'>
                  <Addeditems Data={AddcardDummy} />
                </div>
                <div className='col-span-4'>
                  <PromoInput />
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}
export default AddCard