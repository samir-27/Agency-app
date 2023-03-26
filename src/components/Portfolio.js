import React from 'react';

const images = ["https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&      ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",
    "https://img.freepik.com/premium-photo/beautiful-female-90s-stylish-shirt-rapeseed-field_87910-16352.jpg",
    "https://img.freepik.com/premium-vector/vector-illustration-mushrooms-abstract-graphic_2500-73.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",
    "https://img.freepik.com/premium-photo/glowing-neon-sign-with-words-karaoke-party-brick-wall_495423-52971.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",
    "https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",
    "https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",
    "https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",
    "https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph",];


function SmImg(props) {
    return (

   
                <div className={props.DivClasses}>
                    <img
                        alt="gallery"
                        className={props.ImgClasses}
                        src={props.image}
                    />
                </div>  
    );
}

const Portfolio = () => {
    return (
        <>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-1/2">
                <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full"
                    ImgClasses="w-full object-cover h-full object-center block"
                    image={images[0]}
                />
                <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full"
                    ImgClasses="w-full object-cover h-full object-center block"
                    image={images[1]}
                />
                <SmImg
                    DivClasses="md:p-2 p-1 w-full"
                    ImgClasses="w-full h-full object-cover object-center block"
                    image={images[2]}
                />
            </div>
            <div className="flex flex-wrap w-1/2">
                <SmImg
                    DivClasses="md:p-2 p-1 w-full"
                    ImgClasses="w-full h-full object-cover object-center block"
                    image={images[3]}
                />
               <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full"
                    ImgClasses="w-full object-cover h-full object-center block"
                    image={images[0]}
                />
                <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full"
                    ImgClasses="w-full object-cover h-full object-center block"
                    image={images[1]}
                />
            
           
            </div></div>
         </section>
        </>

    );
};

export default Portfolio;