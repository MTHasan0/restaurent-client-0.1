import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'
import img7 from '../../assets/home/slide1.jpg'
import img8 from '../../assets/home/slide2.jpg'
import img9 from '../../assets/home/slide3.jpg'
import img10 from '../../assets/home/slide4.jpg'
import img11 from '../../assets/home/slide5.jpg'
import chefServiceImg from '../../assets/home/chef-service.jpg'



const Banner = () => {
    return (
        <div className='w-full m-auto'>
            <Carousel>
                <div>
                    <img src={img1} alt="" />

                </div>
                <div>
                    <img src={img2} alt="" />

                </div>
                <div>
                    <img src={img3} alt="" />

                </div>
                <div>
                    <img src={img4} alt="" />

                </div>
                <div>
                    <img src={img5} alt="" />

                </div>
                <div>
                    <img src={img6} alt="" />

                </div>

            </Carousel>

            <div className='text-center mb-10'>
                <div className=' bg-slate-300 w-auto h-1'></div>

                <p className=' p-2'>--- From 11AM to 10PM ---</p>
                <p className='p-2 text-xl'>ORDER ONLINE</p>
                <div className='bg-slate-300 w-auto h-1'></div>

            </div>


            <div className=' flex '>
                <div className="carousel rounded-box m-auto max-w-xl space-x-2 ">
                    <div className="carousel-item w-1/2">
                        <img
                            src={img7}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img
                            src={img8}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img
                            src={img9}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img
                            src={img10}
                            className="w-full" />
                    </div>
                    <div className="carousel-item w-1/2">
                        <img
                            src={img11}
                            className="w-full" />
                    </div>

                </div>
            </div>


            <div className="hero mt-3 lg:mt-10">
                <div className="hero-overlay bg-opacity-60"><img src={chefServiceImg} alt="" /></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl bg-opacity-70 bg-slate-800 rounded-tl-2xl rounded-br-2xl">

                        <div className=' lg:p-10'>
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;