import { Link } from 'react-router-dom';
const NewCourses = (newCourseData) => {
    const { data } = newCourseData
    return (
      <>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6'>
          {data && data.length ? (
            <>
              {data.map((courseList) => (
                <div className='course-item bg-white shadow-sm shadow-md hover:shadow-lg transition duration-500'>
                  <div className='h-56 overflow-hidden rounded-tl-md rounded-tr-md relative'>
                    <div
                      className={`course_tag absolute font-medium text-white rounded ${courseList.bgClassName}`}
                    >
                      {courseList.courseTag}
                    </div>
                    <Link to='course-details'>
                      <img
                        className='course_image h-56 w-full object-cover'
                        src={courseList.courseImage}
                      />
                    </Link>
                  </div>
                  <div className='course_content p-4'>
                    <div className='flex items-center justify-between pb-4'>
                      <div className='flex items-center text-black-500'>
                        <i className='fa fa-book'></i>
                        <span className='pl-2'>{courseList.lesson}</span>
                      </div>
                      <div className='flex items-center'>
                        <i className='fa fa-star text-yellow'></i>
                        <span className='pl-1'>{courseList.courseRating}</span>
                      </div>
                    </div>
                    <h5 className='leading-6 course_name'>
                      <Link
                        to='course-detail'
                        className='font-medium block hover:text-blue-700'
                      >
                        {courseList.courseName}
                      </Link>
                    </h5>
                    <div className='course-owner flex items-center text-gray-600'>
                      <img src='./images/user-1.jpg' alt='' />
                      <p className='mb-0 ml-3'>{courseList.courseOwner}</p>
                    </div>
                  </div>
                  <div className='course_more flex items-center justify-between'>
                    <div className='course_price flex items-center'>
                      <span
                        class={`font-bold text-lg ${courseList.textClassName}`}
                      >
                        ${courseList.coursePrice}
                      </span>
                      <span className='old-price text-sm font-medium text-black-500 line-through pl-2'>
                        ${courseList.courseOldPrice}
                      </span>
                    </div>
                    <div className='more-details flex items-center'>
                      <Link
                        to=''
                        className='font-medium text-black-500 hover:text-blue-700'
                      >
                        <span className='mr-2'>{courseList.moreDetails}</span>
                        <i className='fas fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </>
    );
}
export default NewCourses