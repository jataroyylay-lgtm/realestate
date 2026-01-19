import React from 'react';
import { color, motion } from 'framer-motion';
import CountUp from 'react-countup';
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        
        <div className="hero-left">
            <div className="title">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            Discover <br />
            Most Suitable <br />
            Property
          </motion.h1>
            </div>
          <div className="flexhero-des">
            <span>Find a variety of properties that suit you easily</span>
            <br />
            <span>Forget all difficulties in finding a residence for you</span>
          </div> 
            <div className="search-bar">
              <input type="text" placeholder="Search location..." />
              <button className="bn">Search</button>
            </div>

            <div className="stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />+
                </span>
                <span className='spa'>Premium Product</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1800} end={2000} duration={2} />+
                </span>
                <span className='spa'>Happy Customer</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={10} end={28} duration={2} />+
                </span>
                <span className='spa'>Awards Winning</span>
              </div>
            </div>
          
        </div>
        <div className="hero-right">
          <motion.div
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className="img-container"
          >
            <img className="rub" src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
