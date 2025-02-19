import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrSkype } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='p-10 flex justify-center items-center flex-col lg:justify-around lg:flex-row gap-10'>
          <ul className='flex gap-10 flex-col lg:flex-row'>
               <li>BLOG</li>
               <li>FAQs</li>
               <li>Contact us</li>
          </ul>
          <ul className='flex gap-10'>
               <li><FaFacebook/></li>
               <li><FaTwitter/></li>
               <li><FaSquareInstagram/></li>
               <li><GrSkype/></li>
               <li><FaPinterest/></li>
          </ul>
    </div>
  )
}

export default Footer