import React, { useState } from 'react';
import { HiOutlineXCircle, HiOutlinePlusCircle } from 'react-icons/hi';

interface SkillButtonProps {
  text: string;
  flag: boolean;
}

const SkillButton: React.FC<SkillButtonProps> = ({ text, flag }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={`border-2 border-gray-300 gap-2 text-[#007AE9] px-2 py-1 rounded-full flex items-center mt-2 ${
        isSelected ? 'bg-[#007AE9] text-white font-bold' : ''
      }`}
    >
      <span className="text-[#007AE9] font-bold text-[15px]">{text}</span>
      {flag === true ? (
        <HiOutlineXCircle className="w-5 h-5 ml-1 text-[#007AE9]" />
      ) : (
        <HiOutlinePlusCircle className="w-5 h-5 ml-1 text-[#007AE9]" />
      )}
    </button>
  );
};

export default SkillButton;
