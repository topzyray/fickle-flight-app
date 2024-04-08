import React from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { PiDotOutlineLight } from 'react-icons/pi';
import { IoBed } from 'react-icons/io5';
import { IoTicket } from 'react-icons/io5';
import { PiForkKnifeFill } from 'react-icons/pi';
import { FaTrainSubway } from 'react-icons/fa6';
import { FaTaxi } from 'react-icons/fa';
import { BiSolidMoviePlay } from 'react-icons/bi';

const RecentSearch = ({ start, end, date }) => {
  return (
    <>
      <div className="w-full border border-[#EAEAEA] rounded-md flex flex-col justify-center items-center gap-2 p-4">
        <div className="w-full text-primary text-xl md:text-2xl font-bold flex justify-between items-center">
          <p>{start}</p>
          <div className="flex items-center gap-4">
            <PiDotOutlineLight className="text-3xl" />
            <IoAirplaneSharp />
            <PiDotOutlineLight className="text-3xl" />
          </div>
          <p>{end}</p>
        </div>
        <p className="text-lg md:text-xl font-bold">
          Depart On: <span>{date}</span>
        </p>
      </div>
    </>
  );
};

const PlanTrip = ({ icon, iconBg, text }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div
          className={`bg-[${iconBg}] text-white rounded-2xl p-3 text-2xl sm:text-3xl`}
        >
          {icon}
        </div>
        <p className="text-[#8E8E94] text-[15px]">{text}</p>
      </div>
    </>
  );
};

const SearchesAndPlan = () => {
  return (
    <div className="w-full px-6 md:px-10 lg:px-28 space-y-0 md:space-y-3">
      <div className="py-5">
        <h2 className="text-base md:text-lg font-bold mb-5 uppercase">
          Recent Searches
        </h2>
        <div className="flex flex-col md:flex-row justify-around gap-2">
          <RecentSearch start="SIN" end="LAX" date="4 May 2024" />
          <RecentSearch start="MY" end="DUB" date="9 May 2024" />
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-base md:text-lg text-[#CECECE] font-bold mb-5 uppercase">
          Prepare for your trip
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-between items-center  gap-4">
          {planData.map((plan) => (
            <PlanTrip
              key={plan.id}
              icon={plan.icon}
              iconBg={plan.color}
              text={plan.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchesAndPlan;

const planData = [
  {
    id: 1,
    icon: <IoBed />,
    color: '#F9668D',
    text: 'Hotel',
  },
  {
    id: 2,
    icon: <IoTicket />,
    color: '#FF9B53',
    text: 'Attractions',
  },
  {
    id: 3,
    icon: <PiForkKnifeFill />,
    color: '#36DA76',
    text: 'Eat',
  },
  {
    id: 4,
    icon: <FaTrainSubway />,
    color: '#FDBF00',
    text: 'Commute',
  },
  {
    id: 5,
    icon: <FaTaxi />,
    color: '#4DABFF',
    text: 'Taxi',
  },
  {
    id: 6,
    icon: <BiSolidMoviePlay />,
    color: '#79CA00',
    text: 'Movie',
  },
];
