'use client';
import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import toast from 'react-hot-toast';
import { RemoveSavedProject, addSavedProject } from '../../../app/Services/operations/ProjectHandler';
import { useUser } from '@auth0/nextjs-auth0/client';

interface BasicDetail {
  projectLength: number;
}

interface CardData {
  _id: string;
  projectName: string;
  Skill: string[];
  BasicDetail: BasicDetail;
}

interface FavouriteCommonProps {
  cardData: CardData;
}

const FavouriteCommon: React.FC<FavouriteCommonProps> = ({ cardData }) => {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(true);
  const { user } = useUser();
  const Email = user?.email;

  const handleNavigate = (projectid: string) => {
    const queryString = new URLSearchParams({ projectid }).toString();
    router.push(`/components/ProjectInfo/ProjectDesc?${queryString}`);
  };

  const getSkillImage = (skills: string[]) => {
    if (!skills || skills.length === 0) return null;

    const lowerCaseSkills = skills.map(skill => skill.toLowerCase());
    if (lowerCaseSkills.includes('react.js') || lowerCaseSkills.includes('next.js')) {
      return <Image src='/images/react.png' alt='React/Next.js' width={64} height={64} quality={90} layout='fixed' objectFit='contain' priority={true} className='rounded-lg h-14' />;
    } else if (lowerCaseSkills.includes('node.js')) {
      return <img src='/images/node.png' alt='Node.js' className='w-6 h-6' />;
    } else if (lowerCaseSkills.includes('html')) {
      return <img src='/images/html.png' alt='HTML' className='w-6 h-6' />;
    } else if (lowerCaseSkills.includes('css')) {
      return <img src='/images/css.png' alt='CSS' className='w-6 h-6' />;
    } else if (lowerCaseSkills.includes('javascript')) {
      return <img src='/images/javascript.png' alt='JavaScript' className='w-6 h-6' />;
    }

    return null;
  };

  const handleSavedProject = async () => {
    try {
      if (isSaved) {
        await RemoveSavedProject(cardData._id, Email);
        setIsSaved(false);
        toast.success("Project Removed Successfully");
      } else {
        await addSavedProject(Email, cardData._id);
        setIsSaved(true);
        toast.success("Project Saved Successfully");
      }
    } catch (error) {
      console.error('Error updating saved projects:', error);
    }
  };

  return (
    <div className='flex justify-between items-center border-b-[3px] border-slate-300 p-2 mb-5 '>
      <div>
        <div className='flex gap-3'>
          <div>
            {getSkillImage(cardData.Skill)}
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-3'>
              <p className='text-md text-slate-800 font-semibold'>{cardData.projectName}</p>
              <p className='bg-blue-100 text-blue-700 rounded-2xl px-2 py-1'>Remote</p>
            </div>
            <div className='text-slate-500 text-md flex gap-3 '>
              <p className='flex gap-2 items-center text-md'>
                <CiLocationOn />
                {/* Define location or extract from cardData */}
              </p>
              <p className='flex gap-1 items-center text-md'>
                <IoIosTime />
                {cardData.BasicDetail?.projectLength} Months
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-3 items-center'>      
        <div className='bg-blue-200 px-4 py-3 rounded-lg cursor-pointer' onClick={handleSavedProject}>
          {isSaved ? <FaBookmark className='text-xl text-blue-700 font-bold' /> : <CiBookmark className='text-2xl text-blue-700 font-bold' />}
        </div>  
        <div className='cursor-pointer text-white font-bold bg-blue-600 h-fit p-3 rounded-lg text-md flex items-center gap-2' onClick={() => handleNavigate(cardData._id)}>
          View Detail
          <FaArrowRight />
        </div>
      </div> 
    </div>
  );
};

export default FavouriteCommon;
