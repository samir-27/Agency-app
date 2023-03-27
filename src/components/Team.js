import React from 'react'

function Card(props) {
    return (
        <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 p-4">
            <div className="flex relative h-80">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={props.image} />
                <div className="px-8 py-10 relative z-10 w-full h-80npm install react-slick border-4 border-cyan-500 bg-gray-100 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-800 mb-1">{props.subtitle}</h2>
                    <h1 className="title-font text-2xl font-medium text-cyan-500 mb-3">{props.name}</h1>
                    <p className="leading-relaxed">{props.contant}</p>
                </div>
            </div>
        </div>
    )

}

export default function Team() {
    return (
        <div>
                    <div className="flex flex-col text-center w-full my-16">
                        <h1 className="sm:text-6xl text-5xl md:text-6xl lg:text-7xl font-medium title-font m-4  text-gray-900"><span className='text-cyan-500 '>Te</span>am</h1>   <hr class="border-2 border-cyan-500  mx-auto w-1/2" />
                    </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">

                    <div className="flex flex-wrap lg:mx-36 -m-4">

                        <Card image="./images/team/manager.avif"
                            subtitle="project managers"
                            name="James Smith"
                            contant="Project managers oversee design projects from conception to completion in a design company. "
                        />
                        <Card image="./images/team/hr.avif"
                            subtitle="Human Resources"
                            name="Olivia Davis"
                            contant="HR in a design company handles hiring, employee relations, benefits, and other human resources functions. "
                        />
                        <Card image="./images/team/disigner1.avif"
                            subtitle="Designer"
                            name="Robert Davis"
                            contant="Designers in a design company are responsible for creating visually appealing and effective design solutions for clients."
                        />
                       
                        <Card image="./images/team/disigner2.avif"
                            subtitle="Designer"
                            name="William Brown"
                            contant="Designers in a design company are responsible for creating visually appealing and effective design solutions for clients."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
