import React from 'react'

function Card(props) {
  return (
    <div className="bg-white shadow border-4 border-cyan-500">
      <div className="px-4 py-5 sm:p-6">
        <img src={props.icon} className='h-12 mx-auto m-4 mt-0' alt="" />
        <h3 className="text-lg leading-6 font-medium text-cyan-500">{props.name}</h3>
        <div className="mt-2 text-base text-gray-500">
          {props.contant}
        </div>
      </div>
    </div>)
}

function Contact() {
  return (

    <div className=" mx-auto py-12 px-24 lg:py-16 lg:px-8">
      <div className="flex flex-col text-center w-full my-16">
        <h1 className="sm:text-6xl text-5xl md:text-6xl lg:text-7xl font-medium title-font m-4  text-gray-900"><span className='text-cyan-500 '>Co</span>ntact</h1>   <hr class="border-2 border-cyan-500  mx-auto w-1/2" />
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-3 text-center mx-auto sm:mx-2 lg:grid-cols-3">

        <Card icon="./images/location.png" name="Address" contant="Bhavnagar,Gujrat"/>
        <Card icon="./images/call.png" name="Call" contant="1234569546"/>
        <Card icon="./images/emali.png" name="Email" contant="dummymail@gmail.com"/>
      </div>

      <div className="flex flex-col text-center w-full mt-16">
        <h1 className=" font-medium title-font mb-4 text-gray-900">Copywrite<span className='text-cyan-500 '>©</span>2023</h1>   <hr class="border-1 border-cyan-500  mx-auto w-1/2" />
      </div>

    </div>

  )
}
export default Contact;