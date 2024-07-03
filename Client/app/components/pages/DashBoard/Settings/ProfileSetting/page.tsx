"use client"
import React, { useState } from 'react'
import {PiLinkSimpleBold} from "react-icons/pi"
import {FaLinkedinIn} from "react-icons/fa"
import {ImCancelCircle} from "react-icons/im"
import { FaSuitcase } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';




const Page = () => {
  const {userData}=useSelector((slice)=>slice.userDataSlice)
    const[projectAlert,setProjectAlert]=useState({
        role:"",
        location:"",
    });
    
    const handlechanges=()=>{
         toast.success(
            'you will notify when anybody will post a project'
         )
    }
  return (
    <div className=' mt-10'>
         <div  className='text-slate-800 text-md mt-4  font-semibold '>Contact Info</div>
         <div className='flex flex-col gap-2 w-[100%] mt-4 border-b-[2px] border-slate-300 pb-5'>
                <label htmlFor='website' className='text-md text-late-800 font-semibold'>Email</label>
                <div className='relative'>
                  <input
                    value={userData?.Email}

                    placeholder='Website...'
                    className='relative outline-none pl-12 pr-4 py-4 border-[2px] border-slate-300 text-md w-full'
                  />
                  <FaSuitcase className='absolute left-3 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600' />
                </div>
         </div>

         {/*Project alerts*/}
         <div  className=' mt-5  pb-8 border-b-[2px] border-slate-300 '>
              <p className=' text-late-800 text-md font-semibold'>Project Alerts</p>
            <div className=' flex gap-5'>
                <div className='flex flex-col gap-2 w-[100%] mt-4'>
                    <label htmlFor='website' className='text-md text-late-800 font-semibold'>Key Stack</label>
                    <div className='relative'>
                    <input
                       
                        placeholder='Your Key Stack'
                        className='relative outline-none pl-12 pr-4 py-4 border-[2px] border-slate-300 text-md w-full'
                    />
                    <FaSuitcase className='absolute left-3 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600' />
                    </div>
                 </div>
                 
                 <div className='flex flex-col gap-2 w-[100%] mt-4'>
                    <label htmlFor='website' className='text-md text-late-800 font-semibold'>Location</label>
                    <div className='relative'>
                    <input
                     
                        placeholder='Location'
                        className='relative outline-none pl-12 pr-4 py-4 border-[2px] border-slate-300 text-md w-full'
                    />
                    <MdOutlineMyLocation className='absolute left-3 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600' />
                    </div>
                 </div>
                 
           </div>
                  <div className='mt-4 bg-blue-600 px-5 py-5 rounded-xl w-fit text-white font-semibold cursor-pointer ' onClick={handlechanges}>
                    Save Changes
                </div>
         </div>
           {/*delete your account*/}
           <div className=' mt-5 flex flex-col gap-5'>
                     <p className=' text-md text-slate-800 font-semibold'>Delete Your Account</p>
                     <p  className=' text-md text-slate-600  max-w-[67%]'>If You delete your copartner account,you will no longer to get information about the matched jobs,following employers,and job alerts,shortlisted project and more. You will be abandoned from all the services of copartner.com</p>
                     <button className=' text-red-700  text-md flex gap-2 items-center font-semibold'>
                        <MdCancel className=' text-2xl'/>
                        Close Account
                    </button>
                </div>
     </div>
  )
}

export default Page;