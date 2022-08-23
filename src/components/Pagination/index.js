import React from 'react'
import { Link } from 'react-router-dom';
const Pagination = () =>
{
    return(
        <>
            <div className="pagination flex items-center space-x-1 pt-10 justify-center">
                <Link to="#" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                    Previous
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md  hover:text-white">
                    1
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md  hover:text-white">
                    2
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md  hover:text-white">
                    3
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md  hover:text-white">
                    Next
                </Link>
            </div>
        </>
    )
}
export default Pagination