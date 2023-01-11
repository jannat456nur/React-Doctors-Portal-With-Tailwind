import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blog/Blogs';
import Cards from '../Card/Cards';
import Doctors from '../Doctor/Doctors';
import Login from '../Login/Login';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import MidBanner from '../MidBanner/MidBanner';
import Reviews from '../Review/Reviews';
import Services from '../Service/Services';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <MidBanner></MidBanner>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            {/* <Blogs></Blogs> */}
            {/* <Doctors></Doctors> */}
            <Login></Login>
        </div>
    );
};

export default Home;