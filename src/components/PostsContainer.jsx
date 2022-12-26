import React from 'react'
import PostCard from './PostCard'
import './PostsContainer.css'


// DATA 
import cardInfo from "../cardsinfo.json"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const PostsContainer = () => {





  return (
    <div className='post-container'>
        <div className="recent">
            <span>Recent posts</span>
            <a href="#">View all</a>
        </div>
        <div className="cards-section row">
      
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}

      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1101: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1510: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}

      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
    >


{
            cardInfo.map(card => (
                <SwiperSlide><PostCard  title={card.title} body={card.body} tarix={card.date} movzu={card.subject} /></SwiperSlide>
            ))
       }
     

  
      
   
    </Swiper>

        </div>
    </div>
  )
}

export default PostsContainer