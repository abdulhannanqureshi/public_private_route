const TopCourses = (TopCoursesData) => {
    const {data} = TopCoursesData
    return (
        <>
            <div className="top-courses">
                <h2 className="font-bold">Top Courses this Month</h2>
                <ol className='list-decimal pl-6'>
                    {data && data.length ?
                        <>
                            {data.map((TopCourse) =>
                                <li key={TopCourse}> {TopCourse} </li>
                            )}
                        </>
                        : null}
                </ol>
            </div>
        </>
    )
}
export default TopCourses