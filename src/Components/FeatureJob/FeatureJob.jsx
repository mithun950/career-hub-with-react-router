
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function FeatureJob({feature}) {


    const {logo,salary,location,remote_or_onsite,company_name,job_title,job_type,id} = feature;

    
  return (
    <div className='bg-[#f2eefa] p-12 rounded-2xl'>
      <img src={logo} alt="" />
      <h2 className='text-2xl font-bold mt-3'>{job_title}</h2>
      <h4 className='font-semibold text-slate-400'>{company_name}</h4>
      <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
      <button className="btn btn-outline btn-primary ml-4 mt-4">{job_type}</button>

      <div className=' sm:flex justify-start gap-4 mt-4'>
        <div className='flex'>
         <img src="/public/assets/icons/Location.png" alt="" />
         <h4> {location}</h4>
        </div>

        <div className='flex '>
            <img  src="/public/assets/icons/money.png" alt="" />
            <h4>Salary: {salary}</h4>
        </div>
      </div>
     <Link to={`/featureJobDetails/${id}`}> <button className="btn btn-primary text-white font-bold  bg-gradient-to-tl from-[#7E90FE] to-[#9873FF] mt-10"> View Details </button></Link>

    </div>
  )
}

FeatureJob.propTypes = {

}

export default FeatureJob

