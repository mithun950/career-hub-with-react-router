
import PropTypes from 'prop-types'

function CategoryList({category}) {

    const {logo,category_name,availability} = category;
  return (
    <div className='bg-[#f2eefa] py-8 px-10 rounded-2xl'>
      <img className='w-20' src={logo} alt="" />
      <h2 className='mt-3 text-xl font-bold text-nowrap'>{category_name}</h2>
      <h4 className='mt-2 text-md text-slate-500'>{availability}</h4>
    </div>
  )
}

CategoryList.propTypes = {

}

export default CategoryList

