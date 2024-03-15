import React from 'react';
import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";


const Course = ({ course, handleAddToCart }) => {
    const {id, title, price, credit, description, img} = course;
    return (
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between">
            <figure className="">
                <img className="w-full rounded-lg" src={img} alt="Shoes"/>
            </figure>
            <div >
                <h2 className="text-base mt-4 font-semibold text-[#1C1B1B]">{title}</h2>
                <p className="mt-3 font-normal text-sm">{description}</p>
                <div className="flex justify-between my-4">
                    <div className='flex items-center gap-2'>
                        <p><LuDollarSign /></p>
                        <p className="text-base font-medium text-[#1C1B1B99]"> Price : {price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p><BsBook /></p>
                        <p className="text-base font-medium text-[#1C1B1B99]">Credit : {credit}</p>
                    </div>
                </div>
                <div className='card-actions'>
                    <button
                        onClick={() => (handleAddToCart(course, id))}
                        className="btn text-lg text-white w-full bg-[#2F80ED]"
                    >Select</button>
                </div>
            
            </div>
        </div>
    );
};

export default Course;