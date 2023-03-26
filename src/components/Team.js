import React from 'react'

function Card(props){
    return(
        <div className="lg:w-1/2 md:w-1/2  p-4">
        <div className="flex relative h-80">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={props.image} />
            <div className="px-8 py-10 relative z-10 w-full h-80npm install react-slick border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{props.subtitle}</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.name}</h1>
                <p className="leading-relaxed">{props.contant}</p>
            </div>
        </div>
    </div>
    )

}

export default function Team() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>                       
                    </div>

                    <div className="flex flex-wrap lg:mx-36 -m-4">
                       
                       <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph"
                        subtitle="samir"
                        name="samir"
                        contant=".com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.2940083 "
                       />
                       <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph"
                        subtitle="samir"
                        name="samir"
                        contant=".com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.2940083 "
                       />
                       <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph"
                        subtitle="samir"
                        name="samir"
                        contant=".com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.2940083 "
                       />
                       <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph"
                        subtitle="samir"
                        name="samir"
                        contant=".com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.2940083 "
                       />
                      
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
