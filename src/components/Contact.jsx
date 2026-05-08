import React from 'react'
import { Color, imgs } from '../assets/assets'
import Title from './Title'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = ({theme}) => {

  const onSubmit = async (event) =>{

    const apiKey = import.meta.env.VITE_CONTACT_API_KEY;

    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key",apiKey);


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    toast(data.success ? "Successfully submited!" : "Error");

    event.target.reset()
  };


  return (
    <div id='contact' className='px-10 md:px-20 py-5 flex flex-col items-center'>
      <Title theme={theme} title1={"Get in"} title2={"Touch"} description={"Let's discuss the project."}/>

      <div className="flex flex-col md:flex-row gap-10 mt-5 max-w-150">

         <form onSubmit={onSubmit} className={`rounded-xl p-6 flex-1/2 flex flex-col gap-3 ${theme==='dark'? "bg-gray-800" : Color.darkbg}`}>

         <div className="flex gap-3 *:w-full">
               <input name='First Name' className='flex-1/2  p-1 bg-gray-500 rounded-md outline-0' type="text" placeholder='First Name' />
               <input name='Last Name' className='flex-1/2  p-1 bg-gray-500 rounded-md outline-0' type="text" placeholder='Last Name' />
          </div>

            <input name='email' className=' p-1 bg-gray-500 rounded-md outline-0' type="email" placeholder='Enter email' name="" id=""/>
            <input name='Phone Number' className=' p-1 bg-gray-500 rounded-md outline-0' type="text" placeholder='Enter PhoneNumber' id="" />
            <textarea className=' p-1 bg-gray-500 rounded-md outline-0' name="message" placeholder='Your Message'></textarea>
            <button className='bg-red-400 px-3 rounded-md py-1 w-fit '>submit</button>

            <ToastContainer/>
         </form>

      </div>

    </div>
  )
}

export default Contact
