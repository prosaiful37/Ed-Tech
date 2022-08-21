import React from 'react';
import Banner from './Banner/Banner';
import BusinessBrand from './BusinessBrand/BusinessBrand';
import Connected from './Connected/Connected';
import Features from './Features/Features';
import LiveClass from './LiveClass/LiveClass';
import ServicesCourses from './ServicesCourses/ServicesCourses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <LiveClass></LiveClass>
            <Connected></Connected>
            <ServicesCourses></ServicesCourses>
            <BusinessBrand></BusinessBrand>
        </div>
    );
};

export default Home;