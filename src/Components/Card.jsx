import React from 'react';
import "./Card.css";

const Card = () => {
    return (

        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center justify-center relative w-[508px] h-[214px] bg-[#e9f3fe] rounded-[25px] overflow-hidden">

                {/* Menu Icon */}
                <img className="absolute w-[18px] h-[4px] top-[24px] left-[90vw] sm:left-[462px]" alt="Menu" src="Menu.png" />

                {/* Title */}
                <p className="absolute w-[216px] h-[48px] top-[46px] left-[198px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#2B62CF] text-[25px] tracking-[0.25px] leading-[24.3px]">
                    Animation in UI Design (Part 2)
                </p>

                {/* Button */}
                <div className="absolute w-[103px] h-[22px] top-[41px] left-[198px] ">
                    <div className="relative w-[95px] h-[22px] bg-white rounded-[5px] border border-solid border-[#f2f2f2] hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                        <div className="absolute w-[71px] h-[13px] top-[4px] left-[12.5px] font-bold text-[#e58158] text-[11px] text-center whitespace-nowrap">
                            After Effects
                        </div>
                    </div>
                </div>


                {/* Author Name */}
                <div className="absolute w-[109px] h-[18px] top-[154px] left-[198px]">
                    <img className="absolute w-[18px] h-[18px] top-[2.5px]" alt="Vector" src="Profile.png" />
                    <div className="absolute h-[13px] top-[3px] left-[20px] font-bold text-[#699bf7] text-[11px] tracking-[-0.11px] leading-[normal] whitespace-nowrap">
                        Vishal Pulikottil
                    </div>

                </div>

                {/* Duration */}
                <div className="absolute w-[80px] h-[15px] top-[156px] left-[329px] ">
                    <div className="absolute w-[61px] h-[13px] left-[18px] font-bold text-[#699bf7] text-[11px] tracking-[-0.11px] leading-[normal] whitespace-nowrap">
                        15 minutes
                    </div>
                    <img className="absolute w-[15px] h-[15px] top-[1.5px]" alt="Vector" src="Time.png" />
                </div>

                {/* Card */}
                <div className="absolute w-[155px] h-[181px] top-[16px] left-[15px] bg-white rounded-[22px]">
                    <div className="absolute w-[119px] h-[4px] top-[154px] left-[19px] bg-[#f4f4f4] rounded-[20px]">
                        <div className="w-[64px] h-[4px] bg-[#a4e8fd] rounded-[20px]" />
                    </div>

                    {/* Illustration */}
                    <div className="absolute w-[140px] h-[135px] top-[8px] left-[10px]">
                        <img
                            className="absolute w-[140px] h-[118px] top-[17px] left-0 object-cover"
                            alt="Illustration"
                            src="Illustration.png"
                        />

                        {/* Vector Icon */}
                        <div className="absolute w-[31px] h-[31px] top-0 left-[103px] bg-white rounded-[15.5px] border border-solid border-[#f9f9f9] shadow-[1px_2px_10px_#0000001a]">
                            <img className="absolute w-[13px] h-[12px] top-[10px] left-[9px]" alt="Vector" src="Vector.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


