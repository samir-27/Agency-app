import React from 'react';

function Home() {
  return (
    <div className="hero min-h-screen relative">
      <video autoPlay muted loop className="hero-video  top-0 left-0 w-full h-full object-cover">
        <source src="./images/video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay bg-opacity-50 bg-gray-900 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="m-22 w-full">
          <h1 className="mb-8 lg:text-8xl md:text-7xl text-6xl text-gray-100 font-bold"><span className='text-cyan-400'>DESIGN </span>
            AGENCY</h1>
          <p className="mb-8">This IT company specializes in developing innovative software solutions for businesses of all sizes..</p>
          <button className="btn btn-outline btn-accent rounded-full ">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
export default Home