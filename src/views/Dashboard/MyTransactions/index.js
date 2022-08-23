import React from 'react'
import TransactionData from '../DataFake/TransactionData'

const MyTransactions = () => {
  return (
    <div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden my-transaction">
                        <table className="min-w-full">
                        <thead className="bg-white border-b">
                            <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                S.No.
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Course Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Purchase Date
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Total Amount
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            TransactionData && TransactionData.length ? 
                            <>
                                {
                                    TransactionData.map((TransactionItem, i) => 
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {TransactionItem.id}
                                        </td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            {TransactionItem.name}
                                        </td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            {TransactionItem.date}
                                        </td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap price">
                                            <span className="font-medium">$</span>{TransactionItem.total_amount}
                                        </td>
                                    </tr>
                                    )
                                }
                            </>
                            :
                            <tr>
                                <td colspan='4'>
                                    <div className='no-transaction text-center pt-12'>
                                        <img src="./images/no-transactions.png" className='w-16 mx-auto pb-2' />
                                        <p>No Transaction made yet.</p>
                                    </div>
                                </td>
                            </tr>
                        }
                            
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyTransactions
