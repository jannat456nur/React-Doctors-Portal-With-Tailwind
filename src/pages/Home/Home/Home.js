import React from "react";
import Banner from "../Banner/Banner";

import Cards from "../Card/Cards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import MidBanner from "../MidBanner/MidBanner";
import Reviews from "../Review/Reviews";
import Services from "../Service/Services";
import Contact from "../Contact/Contact";
import Blogs from "../Blog/Blogs";
import Doctors from "../Doctor/Doctors";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cards></Cards>
      <Services></Services>
      <MidBanner></MidBanner>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>

      {/* <Doctors></Doctors> */}
      {/* <Blogs></Blogs> */}
      {/* <Blogs></Blogs> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
