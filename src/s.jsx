import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className=' mt-[120px] xl:mt-[50px] mr-[10px] cursor-grab active:cursor-grabbing'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]} 
        className="mySwiper w-[100%] rounded-[10px] "
      >
         <SwiperSlide><img className='w-[100%] h-[60vh] rounded-[10px]  '  src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa7b348ce-343a-4127-889b-583edd12b213_uz.jpg&w=1920&q=75" alt="eror 404 sorry" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[60vh] rounded-[10px]  '  src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa95649d2-ee7e-4606-a65e-262015e5b1c6_uz.jpg&w=1920&q=75" alt="eror 404 sorry" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[60vh] rounded-[10px]  '  src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fdb9ec296-5c11-474a-a79e-57ed2debd2f2_uz.jpg&w=1920&q=75" alt="eror 404 sorry" /></SwiperSlide>
      </Swiper>
    </div>
  );
}


