
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import CategoryList from '../CategoryList/CategoryList';

function JobCategoryList() {

   
    
    const [categories,setCategories] = useState([]);
    
    
    useEffect(() => {
       fetch('/Category.json')
       .then(res => res.json())
       .then(data => setCategories(data))
    },[])
  return (
    <div>
      <h2 className='text-center text-3xl mt-12 font-bold'>Job Category List</h2>
      <p className='text-center text-sm mt-3 '>Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto mt-8 gap-6'>
        {
            categories.map((category) => <CategoryList key={category.id}  category={category}></CategoryList>)
        }
      </div>
    </div>
  )
}

JobCategoryList.propTypes = {

}

export default JobCategoryList

