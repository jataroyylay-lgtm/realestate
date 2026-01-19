import React, { useState } from 'react'
import{Swiper ,SwiperSlide , useSwiper} from 'swiper/react'
import 'swiper/css'
import './Resident.css'
import data from '../../ultils/slider.json'
import {sliderSettings} from "../../ultils/common"

const Resident = () => {
  return (
    <div className="home" id='residencies'>
    <div className="r-wrapper">
        <div className="r-container">
            <div className="r-head">
                <span className="o-Text">Best Choices</span><br />
                <span className="p-Text">Popular Residences</span>
            </div>
            <Swiper {...sliderSettings}>
            <SlideNextButton/>
            {data.map((card, i) => (
                <SwiperSlide key={i}>
                <div className="r-card">
                    <img src={card.image} alt="home" />
                    <span className="r-price">
                      <span style={{color:"orange"}}>$</span>
                      <span>{card.price}</span>
                    </span>
                    <span className="t-text">{card.name}</span>
                    <span className="Text">{card.detail}</span>
                </div>
                </SwiperSlide>
            )
            )}
            </Swiper>
        </div>   
    </div>
    </div>
  );
};

export default Resident
const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
            &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
            &lt;
        </button>
      </div>

    );
};
