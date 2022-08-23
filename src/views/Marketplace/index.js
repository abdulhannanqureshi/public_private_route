import React from 'react'
import InnerPageBanner from '../../components/InnerPageBanner'
import exploreCategoriesData from './DataFake/ExploreCategories';
import NewestCourse from './DataFake/NewestCourse';
import TopCoursesData from './DataFake/TopCourses';
import featuredCoursesData from './DataFake/FeaturedCourses';
import NewCourses from './components/NewCourses/newCourses';
import TopCourses from './components/TopCourses/topCourses';
import ExploreCategories from './components/ExploreCategory/exploreCategories';
import FeaturedCourses from './components/FeaturedCourses/featuredCourses';

const Marketplace = () => {

    return (
        <>
            <main className="">
                <InnerPageBanner title={"Marketplace"} />
                <section className='sec-padding'>
                    <div className="container m-auto px-4">
                        <div className='common_heading text-center'>
                            <h2 className="font-bold mb-0">Newest Courses</h2>
                            <p>You don't have to struggle alone, you've got our assistance and help.</p>
                        </div>
                        <NewCourses data={NewestCourse} />
                    </div>
                </section>
                <section className='sec-padding bg-light-gray'>
                    <div className='container mx-auto px-4'>
                        <div className="grid md:grid-cols-2 gap-8">
                            <TopCourses data={TopCoursesData} />
                            <ExploreCategories data={exploreCategoriesData} />
                        </div>
                    </div>
                </section>
                <section className='sec-padding'>
                    <div className='container mx-auto px-4'>
                        <div className='common_heading text-center'>
                            <h2 className="font-bold mb-0">Featured Courses</h2>
                            <p>You don't have to struggle alone, you've got our assistance and help.</p>
                        </div>
                        <FeaturedCourses data={featuredCoursesData} />
                    </div>
                </section>
                
            </main>
        </>
    )
}
export default Marketplace;