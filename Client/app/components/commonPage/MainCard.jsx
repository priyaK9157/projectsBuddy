import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import React, { useState } from 'react';
import cardpic from "../Assets/CardPic.jpg";
import cardpic3 from "../Assets/cardpic3.png";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { Pagination } from '@mui/material';
import Link from 'next/link'; 



const MainCard= ({ CardData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Show 6 cards per page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = CardData.slice(indexOfFirstCard, indexOfLastCard);
  const router = useRouter(); 

  const getTimeDifference = (createdAt) => {
    const currentTime = new Date().getTime(); 
    const createdTime = new Date(createdAt).getTime(); 
    const difference = Math.abs(currentTime - createdTime);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return `${daysDifference} days ago`;
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };

  const handlePageNavigation = (projectid) => {
    const url='https://co-partner-web-zyjv.vercel.app/components/ProjectInfo/ProjectDesc' + "?" + createQueryString("projectid", projectid)
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='w-10/12 mx-auto mt-9'>
      <div className='w-12/12 flex flex-wrap gap-3 justify-start'>
        {currentCards.map((data, index) => {
          const actualIndex = indexOfFirstCard + index;
          return (
            <div key={actualIndex} className='bg-white w-[25rem] p-2 flex flex-col cursor-pointer'>
              <Image src={actualIndex % 2 === 0 ? cardpic : cardpic3} alt='img' className='h-[15rem] rounded-t-lg'/>
              <div className='rounded-b-lg border-[3px] border-slate-300'>
                <div className='w-11/12 mt-4'>
                  <div className='flex justify-between items-center ml-7'>
                    <div className='uppercase text-slate-500 font-semibold text-sm'>{data?.profileId?.Professional_Role}</div>
                    <div className='uppercase text-slate-600 text-md pr-3'>{getTimeDifference(data?.createdAt)}</div>
                  </div>
                  <div className='mt-2 flex flex-col gap-3 ml-7'>
                    <div className='text-md text-slate-800 font-bold w-11/12'>{data?.projectName}</div>
                    <div className='text-sm w-11/12'>
                      {data?.projectDescription.length > 90 
                          ? `${data?.projectDescription.slice(0, 90)}...` 
                          : data?.projectDescription}
                    </div>
                  </div>
                  <div className='flex justify-between mt-4 text-md font-semibold mb-4 ml-7'>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <img src={data?.profileId?.ProfileImage} className='rounded-full h-[3rem] w-[3rem] object-cover' alt='Image'/>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div className='text-[#007AE9]'>{data?.profileId?.name}</div>
                        <div className='uppercase text-slate-400'>{data?.profileId?.Location ?? "India"}</div>
                      </div>
                    </div>
                    <div className='flex items-center text-[#007AE9]'>
                      <div className='pr-3' onClick={() => { handlePageNavigation(data._id) }}>Read More</div>
                      <FaArrowRight/>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          );
        })}
      </div>
      <div className='mt-8 mx-auto w-3/12 pb-20'>
        <Pagination
          count={Math.ceil(CardData.length / cardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{
            '& .MuiPaginationItem-root': { fontSize: '1.5rem', margin: 'auto' },
            '& .MuiPaginationItem-page': {
              backgroundColor: currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? '#007AE9' : 'transparent',
              color: currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? '#fff' : '',
              height: '3.5rem',
              width: '3.5rem',
              marginRight: '8px',
            },
          }}
        />
      </div>
    </div>
  );
};

export default MainCard;
