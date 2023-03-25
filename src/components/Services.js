import React from 'react';


function Card(props) {
    return (
        <>
       
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="card  ">
                <figure className='p-0'>
                    <a className="block relative h-58 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.image} />
                    </a>
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title ">{props.content}</h2>
                    <p> 
                    {props.paragrph}
                    </p>
                </div>
            </div>
        </div>
</>
    );
}

function Services() {
    return (
        <>
         <h1>Services</h1>
            <section className="text-gray-600 body-font mx-12">
                <div className="container px-0 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4 m-0">

                        <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph" content="Samir" paragrph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cupiditate nam, commodi dolorem aliquam error labore in odit temporibus nostrum distinctio accusamus maxime voluptate. Mollitia, quidem! Assumenda aspernatur reprehenderit esse."/>
                        <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph" content="Samir" paragrph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cupiditate nam, commodi dolorem aliquam error labore in odit temporibus nostrum distinctio accusamus maxime voluptate. Mollitia, quidem! Assumenda aspernatur reprehenderit esse."/>
                        <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph" content="Samir" paragrph ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cupiditate nam, commodi dolorem aliquam error labore in odit temporibus nostrum distinctio accusamus maxime voluptate. Mollitia, quidem! Assumenda aspernatur reprehenderit esse."/>
                        <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph" content="Samir" paragrph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cupiditate nam, commodi dolorem aliquam error labore in odit temporibus nostrum distinctio accusamus maxime voluptate. Mollitia, quidem! Assumenda aspernatur reprehenderit esse."/>
                        <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph" content="Samir" paragrph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cupiditate nam, commodi dolorem aliquam error labore in odit temporibus nostrum distinctio accusamus maxime voluptate. Mollitia, quidem! Assumenda aspernatur reprehenderit esse."/>
                        <Card image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.2.294008381.1679708343&semt=sph" content="Samir" paragrph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cupiditate nam, commodi dolorem aliquam error labore in odit temporibus nostrum distinctio accusamus maxime voluptate. Mollitia, quidem! Assumenda aspernatur reprehenderit esse."/>



                    </div>
                </div>
            </section>

        </>
    );
}


export default Services;