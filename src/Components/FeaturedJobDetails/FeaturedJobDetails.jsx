
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'
import CategoryList from '../CategoryList/CategoryList';
import { useEffect, useState } from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

function FeaturedJobDetails() {

    
   
    const {id} = useParams();
    
    const jobId = parseInt(id);
    const jobDetails = useLoaderData();
   
    const details = jobDetails.find(detail => detail.id === jobId)


    const handleApplyBtn = () =>{
        const details = jobDetails.find(detail => detail.id === jobId)
       
    }

    const {experiences,job_description,educational_requirements,job_responsibility,salary,contact_information =[],job_title} = details;
    
     
    
  return (
    <div className='mt-12'>
       <h3 className='text-3xl font-bold text-center '>Job Details</h3>

       <div className='w-10/12 mx-auto mt-6 lg:grid grid-cols-3 justify-between  gap-5'>
        <div className='col-span-2'>
            <p className='text-xl font-bold mt-4'>Job Description: <small className='font-normal'>{job_description}</small> </p>
            <p className='text-xl font-bold mt-4'>Job Responsibility: <small className='font-normal'>{job_responsibility}</small> </p>
            <p className='text-xl font-bold mt-4'>Educational Requirements: <small className='font-normal'>{educational_requirements}</small> </p>
            <p className='text-xl font-bold mt-4'>Experiences: <small className='font-normal'>{experiences}</small> </p>

        </div>
        <div className='bg-gradient-to-tl from-[#c9ceea] to-[#bca8f4] p-8 mt-6 col-span-1 '>
          <h3 className='text-xl font-bold mb-3'>Job Details</h3>
           <hr />
           <p className='flex items-center mt-5 font-semibold'> <span><img src="/public/assets/icons/money.png" alt="" /> </span> Salary:   <small>  {salary} (Per Month)</small></p>
           <p className='flex items-center mt-5 font-semibold'> <span><img src="/public/assets/icons/calendar.png" alt="" /> </span>Job Title:<small>{job_title}(Per Month)</small></p>
           <div>
            <h2 className='mt-5 text-xl font-bold mb-3'>Contact Information</h2>
            <hr />
             <p className='mt-3 font-semibold'>Phone: <small>{contact_information.phone}</small></p>
             <p className='mt-3 font-semibold'>Email: <small>{contact_information.email}</small></p>
             <p className='mt-3 font-semibold'>Address: <small>{contact_information.address}</small></p>

           </div>
           
        </div>
         <div className='text-center'>
         <button onClick={handleApplyBtn} className='px-10 rounded-xl text-white font-bold py-2 bg-gradient-to-tl from-[#7E90FE] to-[#9873FF] mt-5 text-center'>Apply Now</button>
      
         </div>
       

       </div>
    </div>
  )
}

FeaturedJobDetails.propTypes = {

}

export default FeaturedJobDetails

