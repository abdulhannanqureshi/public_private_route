import React from 'react'
import FaqData from '../DataFake/FaqData'

const FAQ = (FaqData) => {
  const { data } = FaqData
  return (
    <>
    <section className='faq-sec sec-padding bg-light-gray'>
      <div className='container mx-auto px-4'>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <div className='common_heading text-center'>
                <h2 className="font-bold mb-0">Frequently Asked Questions</h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            <div className="accordion" id="faqAccordion">
              {
                data && data.length ? 
                <>
                {
                  data.map((FaqItem, i) =>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id={`headingOne${i}`}>
                      <button
                        className=
                        {`accordion-button
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left
                          bg-white
                          border-0
                          rounded-none
                          transition
                          focus:outline-none ${i === 0 ? null: "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${i}`}
                        aria-expanded="true"
                        aria-controls={`collapseOne${i}`}
                      >
                        {FaqItem.question}
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${i}`}
                      className={`accordion-collapse collapse ${i === 0 ? "show" : null}`}
                      aria-labelledby={`headingOne${i}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body py-4 px-5">
                        {FaqItem.answer}
                      </div>
                    </div>
                  </div>
                )}
                </>
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FAQ
