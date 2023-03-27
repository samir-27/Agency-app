import React from 'react';

const images = ["./images/gallary/img1.avif",
"./images/gallary/img2.avif",
"./images/gallary/img3.avif",
"./images/gallary/img4.avif",
"./images/gallary/img5.avif",
"./images/gallary/img6.avif",
 ];


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
  <div className="flex flex-col text-center w-full my-16">
                        <h1 className="sm:text-6xl text-5xl md:text-6xl lg:text-7xl font-medium title-font m-4  text-gray-900"><span className='text-cyan-500 '>Ga</span>llary</h1>   <hr class="border-2 border-cyan-500  mx-auto w-1/2"/>                   
                    </div>

        <section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-1/2">
                <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full "
                    ImgClasses="w-full object-cover h-full border-2 lg:border-4 border-cyan-500 p-1 object-center block"
                    image={images[0]}
                />
                <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full "
                    ImgClasses="w-full object-cover h-full border-2 lg:border-4 border-cyan-500 p-1 object-center block"
                    image={images[1]}
                />
                <SmImg
                    DivClasses="md:p-2 p-1 w-full "
                    ImgClasses="w-full h-full object-cover border-2 lg:border-4 border-cyan-500 p-1 object-center block"
                    image={images[2]}
                />
            </div>
            <div className="flex flex-wrap w-1/2">
                <SmImg
                    DivClasses="md:p-2 p-1 w-full "
                    ImgClasses="w-full h-full object-cover border-2 lg:border-4 border-cyan-500 p-1 object-center block"
                    image={images[3]}
                />
               <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full "
                    ImgClasses="w-full object-cover h-full border-2 lg:border-4 border-cyan-500 p-1 object-center block"
                    image={images[4]}
                />
                <SmImg
                    DivClasses="md:p-2 p-1 lg:w-1/2 w-full "
                    ImgClasses="w-full object-cover h-full border-2 lg:border-4 border-cyan-500 p-1 object-center block"
                    image={images[5]}
                />
            
           
            </div></div>
         </section>
        </>

    );
};

export default Portfolio;