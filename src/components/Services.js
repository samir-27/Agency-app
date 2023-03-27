import React from 'react';

function Card(props) {
    return (
      <>
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
          <div className="card bg-gray-200 min-h-full p-4">
            <figure className="p-0 object-cover">
              <a className="block relative  overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-auto lg:h-72 md:h-62 block"
                  src={props.image}
                //   style={{ height: "250px" }} 
                />
              </a>
            </figure>
            <div className="card-body bg-gray-100 mx-auto p-4">
              <h2 className="text-4xl my-2 text-cyan-500 text-center">
                {props.content} <hr class="border-1 border-cyan-500 m-2 mx-auto w-60"/>
              </h2>
              <p>{props.paragrph}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

function Services() {
    return (
        <>
           <div className="flex flex-col text-center w-full my-16">
                        <h1 className="sm:text-6xl text-5xl md:text-6xl lg:text-7xl font-medium title-font m-4  text-gray-900"><span className='text-cyan-500 '>Se</span>rvices</h1>   <hr class="border-2 border-cyan-500  mx-auto w-1/2"/>                   
                    </div>
            <section className="text-gray-600 body-font mx-12">
                <div className="container px-0  mx-auto">
                    <div className="flex flex-wrap -m-4 m-0">

                        <Card image="./images/web-design.avif" content="Web Design" paragrph="The company specializes in web design services, providing businesses with custom designs to improve their online presence and drive growth, while focusing on user experience and functionality."/>

                        <Card image="./images/logo-design.avif" content="Logo Design" paragrph="The company offers logo design services, creating unique and memorable designs that reflect a business's brand identity. Their skilled designers work closely with clients to ensure satisfaction with the final product."/>

                        <Card image="./images/brochure-design.avif" content="Brochure Design" paragrph ="The company provides brochure design services, crafting visually appealing and informative brochures for businesses. Their designers collaborate with clients to create designs that effectively convey their message and brand.."/>

                        <Card image="./images/graphic-design.avif" content="Graphic Design" paragrph="The company specializes in graphic design services, creating visually stunning designs for businesses. Their skilled designers work closely with clients to bring their vision to life and help them stand out in a crowded market."/>

                        <Card image="./images/UIUX-design.avif" content="UX/UI Design" paragrph="The company offers UI/UX design services, creating visually appealing and user-friendly interfaces for websites and applications. Their designers prioritize user experience to help businesses improve engagement and drive growth."/>

                        <Card image="./images/illustration.avif" content="Illustration" paragrph="The company specializes in illustration design services, creating unique and engaging visuals for businesses. Their skilled illustrators work closely with clients to bring their ideas to life and effectively communicate their message."/>



                    </div>
                </div>
            </section>

        </>
    );
}


export default Services;