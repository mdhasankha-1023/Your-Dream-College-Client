import React from 'react';
import banner from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div className='w-full my-12 relative'>
            <img src={banner} alt="" />
            <div className='absolute top-[25%] left-[5%] w-[60%]'>
                <h2 className='text-6xl font-bold text-center text-white'>Discover Your Dream College <br /> <span className='text-[#EFBD64]'>Where Beauty Meets Knowledge!</span></h2>
            </div>
        </div>

    );
};

export default Banner;