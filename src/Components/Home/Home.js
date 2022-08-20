import React from 'react';
import Banner from './Banner/Banner';
import BusinessBrand from './BusinessBrand/BusinessBrand';
import Features from './Features/Features';
import LiveClass from './LiveClass/LiveClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <LiveClass></LiveClass>
            <BusinessBrand></BusinessBrand>
        </div>
    );
};

export default Home;