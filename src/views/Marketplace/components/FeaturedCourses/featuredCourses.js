import { Link } from 'react-router-dom';
const FeaturedCourses = (featuredCoursesData) => {
    const { data } = featuredCoursesData
    return (
      <>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6'>
          {data && data.length ? (
            <>
              {data.map((featuredCoursesList) => (
                <div className='featured_course_item bg-white shadow-md duration-500'>
                  <div className='h-56 overflow-hidden relative rounded-tl-md rounded-tr-md'>
                    <Link to='course-detail'>
                      <img
                        className='course_image h-56 w-full object-cover'
                        src={featuredCoursesList.courseImage}
                      />
                    </Link>
                  </div>
                  <div className='p-6'>
                    <div className='course_content'>
                      <Link
                        to='#'
                        className={`blog_tag ${featuredCoursesList.courseTagColor}`}
                      >
                        {featuredCoursesList.courseTag}
                      </Link>
                      <h5 className='leading-6 course_name'>
                        <Link
                          to='course-detail'
                          className='font-medium block hover:text-blue-700'
                        >
                          {featuredCoursesList.courseName}
                        </Link>
                      </h5>
                    </div>
                    <div className='flex items-center justify-between text-gray-600'>
                      <div className='course-owner flex items-center'>
                        <img src='./images/user-1.jpg' alt='' />
                        <p className='mb-0 ml-3'>
                          {featuredCoursesList.courseOwner}
                        </p>
                      </div>
                      <div className='course_date text-sm'>
                        <i className='fas fa-clock mr-2'></i>
                        <span className='date'>
                          {featuredCoursesList.courseDate}
                        </span>
                      </div>
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
export default FeaturedCourses