'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {register ,handleSubmit ,formState: {errors}} = useForm()

    const onSubmit = async () => {
        try {
          setIsLoading(true);
      
          await new Promise((resolve) => setTimeout(resolve, 8000));
      
          console.log("Execution after 8 seconds");
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      };
      
    
  return (
    <section className='min-h-svh h-full flex-col flex items-center justify-center p-3 xi:p-4 md:p-8'>
        <div className='mb-[42px] mt-8 w-full x:w-auto'>
            {
                isLoading && <div className={`min-h-[27px] py-2.5 px-4 bg-[#009cde] flex items-center gap-2.5 text-[12px] text-white mb-4 rounded`}>
                    <Image width={28} height={28} className='w-7 h-7 object-contain' src='/images/notice-info.png' alt='notice-info icon'/>
                    <p>Authenticating...</p>
                </div>
            }
            {
              errors?.email && <div className={`min-h-[27px] py-2.5 px-4 bg-[#d35351] flex items-center gap-2.5 text-[12px] text-white mb-4 rounded`} >
                <Image width={28} height={28} className='w-7 h-7 object-contain' src='/images/notice-error.png' alt='notice-error icon'/>
                {errors?.email?.message?.toString()}
              </div>
            }
        <Image width={200} height={54} className='h-[54px] w-full max-w-[300px] object-contain aspect-[61/10] mb-[30px] mx-auto' src='/images/webNajiLogo.svg' alt='website logo'  />
        <form onSubmit={handleSubmit(onSubmit)} className='px-2'>
            <div className='w-full mb-[30px]'>
                <label className='block text-[12px] text-[#293a4a] pl-1 pb-2 font-semibold md:text-sm' htmlFor="email">Email Address</label>
                <div className='relative flex items-center'>
                    <Image quality={100} width={20} height={20} className='w-5 h-5 object-contain absolute left-2.5' src='/images/icon-username.png' alt='user icon' />
                <input {...register('email',{
    required: {
      value: true,
      message: "You must specify a username to log in.", 
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: "Enter a valid email address", 
    },
  })} placeholder='Enter your email address.' className='placeholder:text-[13px] text-[13px] border-2 border-[#bebebe] h-9 rounded w-full focus:outline-none pl-10 pr-3 py-2' type="text w-full" id='email' />
                </div>
            </div>
            <div className='w-full mb-[30px]'>
                <label className='block text-[12px] text-[#293a4a] pl-1 pb-2 font-semibold sm:text-sm' htmlFor="password">Password</label>
                <div className='relative flex items-center'>
                <Image quality={100} width={20} height={20} className='w-5 h-5 object-contain absolute left-2.5' src='/images/icon-password.png' alt='password icon' />
                <input placeholder='Enter your password.' className='placeholder:text-[13px] text-[13px]  border-2 border-[#bebebe] h-9 rounded w-full outline-none focus:outline-none pl-10 pr-3 py-2' type="text" id='password' />
                </div>
            </div>

            <button type='submit' className='w-full text-white bg-[#179bd7] text-center py-[7px] border border-[#095779] hover:bg-[#095779] transition-colors duration-300 ease-in-out text-[13px] rounded font-semibold'>Log in</button>
        </form>
        </div>

     <div className='x:my-10 mx-auto mb-6 x:mb-[45px]'>
        <div className='x:hidden flex items-center justify-center gap-1.5 text-[#333]'>
            <p className='text-sm '>Select a locale:</p>
            <button className='px-2 py-[5px] bg-[#ccc] border border-[#333] rounded text-sm'>English</button>
        </div>
     <ul className='items-center hidden x:flex justify-center flex-wrap gap-x-8 text-center lg:gap-x-12 gap-y-2 p-1.5 text-[12px] text-[#293a4a] font-semibold'>
  {[
    "العربية",
    "čeština",
    "dansk",
    "Deutsch",
    "Ελληνικά",
    "español",
    "español latinoamericano",
    "español de España",
  ].map((item, index) => (
    <li
      key={index}
      className="hover:text-[#d03f00] transition-colors duration-200 cursor-pointer"
    >
      {item}
    </li>
  ))}
  <li className="text-base font-bold hover:text-[#d03f00] transition-colors duration-200 cursor-pointer">
    ...
  </li>
</ul>
     </div>
       

<div className='mt-2.5 text-[7pt] text-[#3f4143] flex flex-col items-center'>
    <Image width={24} height={24} className='w-6 h-6 object-contain mb-2.5' src='/images/cp.svg' alt='website icon' />
    <p className='text-center text-balance font-verdana font-medium'>Copyright©&nbsp;2024 cPanel, L.L.C.
        <br/>
        Privacy Policy
    </p>
</div>

    </section>
  )
}

export default LoginForm