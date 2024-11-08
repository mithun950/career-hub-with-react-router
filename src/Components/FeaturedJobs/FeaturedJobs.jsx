
import PropTypes from 'prop-types'
import { useEffect,useState } from 'react';
import FeatureJob from '../FeatureJob/FeatureJob';
function FeaturedJobs(props) {

    const [featureJobs,setFeatureJobs] = useState([]);
    
    
    useEffect(() => {
       fetch('/public/Jobs.json')
       .then(res => res.json())
       .then(data => setFeatureJobs(data))
    },[])
  return (
    <div>
      <h2 className='text-3xl font-bold text-center mt-10'>Featured Jobs</h2>
      <p className='text-xs text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 w-10/12 mx-auto mt-10 shadow-2xl rounded-2xl p-10'>
        {
            featureJobs.map(feature => <FeatureJob key={feature.id} feature={feature}></FeatureJob>)
        }
      </div>
    </div>
  )
}

FeaturedJobs.propTypes = {

}

export default FeaturedJobs

