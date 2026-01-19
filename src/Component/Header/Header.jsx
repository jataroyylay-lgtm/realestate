import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='h-wrapper'>
      <section className='h-container'>
        <img src="./logo.png" alt="logo" width={100}/>

        <div className="h-navbar">
          <li>
            <a className='ah' href="#residencies">Residentcies</a>
            <a className='ah'href="#Value">Our Value</a>
            <a className='ah'href="#contact">Contact Us</a>
            <a className='ah'href="#Getstart">Get Started</a>
            <button className="bn">
            <a className='an' href="#">Contact</a>
            </button>
            </li>
        </div>
      </section>
    </div>
  )
}

export default Header
