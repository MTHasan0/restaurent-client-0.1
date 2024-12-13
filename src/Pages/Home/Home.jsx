import React from 'react';
import Banner from './Banner';
import Menu from '../Menu/Menu';
import ChefRecommends from '../../Components/ChefRecommends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu></Menu>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;