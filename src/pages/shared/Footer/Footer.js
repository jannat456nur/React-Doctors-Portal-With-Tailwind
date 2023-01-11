import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mx-10' >
          <footer class="footer p-10 bg-light text-dark-content content-center grid justify-around">
  <div>
    <span class="footer-title">Services</span> 
    <Link class="link link-hover">Branding</Link>
    <Link class="link link-hover">Design</Link>
    <Link class="link link-hover">Marketing</Link>
    <Link class="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <Link class="link link-hover">About us</Link>
    <Link class="link link-hover">Contact</Link>
    <Link class="link link-hover">Jobs</Link>
    <Link class="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <Link class="link link-hover">Terms of use</Link>
    <Link class="link link-hover">Privacy policy</Link>
    <Link class="link link-hover">Cookie policy</Link>
  </div>
</footer>
<div>
    <p className='text-center'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
        </div>
    );
};

export default Footer;