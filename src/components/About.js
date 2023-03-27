import React from 'react'

export default function About() {
    return (
        <div>
            <section id="photo" className=" bg-cover h-2/3 min-h-full mt-10 bg-fixed bg-no-repeat max-h-screen flex flex-col justify-center items-center px-auto" style={{ backgroundImage: 'url("./images/bg-img.avif")' }}>
                <div className="container flex  flex-col justify-center items-center px-auto">
                    <div className="bg-opacity-70 m-20 bg-gray-900 sm:mx-12 mx-6  lg:mx-56 ">
                        <div className="container ">

                            <div className="flex p-8 flex-wrap ">
                                <h1 className='text-3xl text-cyan-400 font-bold pt-0 p-5'>About <span className='text-gray-100'> Agency</span></h1>

                                <div className="w-full p-4  max-h-screen">
                                    <h3 className="text-gray-100 text-xl mb-4">Our Mission</h3>
                                    <p className="text-base text-gray-400">Our mission is to provide businesses with high-quality and customized design solutions that enhance their online presence, engage their audience, and drive growth through creativity, collaboration, and innovation.</p>
                                    <h3 className="text-gray-100 text-xl my-4">Our Vision</h3>
                                    <p className="text-base text-gray-400">Our vision is to become a leading design agency that empowers businesses to succeed by providing innovative, efficient, and effective design solutions that exceed their expectations and enhance their brand reputation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}