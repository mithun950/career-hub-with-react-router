import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../Banner/Banner'
import JobCategoryList from '../JobCategoryList/JobCategoryList'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'

function Home() {
  return (
    <div>
    
       <Banner></Banner>
       <JobCategoryList></JobCategoryList>
       <FeaturedJobs></FeaturedJobs>
    </div>
  )
}

Home.propTypes = {

}

export default Home

