import React from 'react'

export default function About() {
    return (
        <div>
            <section id="photo" className=" bg-cover h-screen mt-10 bg-fixed bg-no-repeat flex flex-col justify-center items-center px-auto" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph")', visibility: 'visible' }}>
                <div className="container flex  flex-col justify-center items-center px-auto">
                    <div className="bg-opacity-50 bg-gray-100 sm:mx-12 mx-6  lg:mx-56 max-h-screen">
                        <div className="container ">

                            <div className="flex p-8 flex-wrap ">
                                <h1 className='text-3xl text-gray-200 font-bold pt-0 p-5'>About Agency</h1>

                                <div className="w-full p-4 mb-8 max-h-screen">
                                    <h3 className="text-base font-semibold  mb-4">Our Mission</h3>
                                    <p className="text-base">Duis non ex non purus laoreet congue in id velit. Praesent sed velit eget orci ultricies congue sit amet vel tellus. Sed quis pretium neque. Vestibulum quis tellus in lorem elementum faucibus. Pellentesque efficitur malesuada consequat. Nam sed nibh sit amet quam hendrerit aliquet. Morbi ac nulla vel sem mollis maximus. In hac habitasse platea dictumst.</p>
                                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                                    <p className="text-base">Aliquam imperdiet nunc vel turpis dapibus, non vestibulum est bibendum. Vivamus bibendum odio vitae leo lacinia, non convallis magna ultricies. Suspendisse eget purus odio. Nullam sit amet nunc ligula. Phasellus feugiat libero nec erat molestie consequat. Aenean sed augue urna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}