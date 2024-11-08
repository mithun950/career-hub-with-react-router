

import PropTypes from 'prop-types'

function Banner(props) {
  return (
    <div className="hero bg-base-200 min-h-screen ">
    <div className=" w-10/12 mx-auto hero-content flex-col lg:flex-row-reverse">
      <img
        src='/public/assets/images/user.png'
        className="w-80" />
      <div>
        <h1 className="text-4xl font-bold">One Step Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
        <p className="py-6">
        Explore thousands of job opportunities with all the information you need. Its your future. <br /> Come find it. Manage all your job application from start to finish.
        </p>
        <button className="btn btn-primary text-white font-bold  bg-gradient-to-tl from-[#7E90FE] to-[#9873FF]">Get Started</button>
      </div>
    </div>
  </div>
  )
}

Banner.propTypes = {

}

export default Banner

