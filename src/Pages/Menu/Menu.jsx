import React from 'react';

const Menu = () => {
    return (
        <div>
            <div className='text-center lg:mt-10 lg:mb-10'>
                <p className=' text-orange-400 p-2'>--- Check it Out ---</p>
                <div className=' bg-slate-300 w-auto h-1'></div>

                <p className='p-2 text-xl'>FROM OUR MENU</p>
                <div className='bg-slate-300 w-auto h-1'></div>

            </div>
            <div className='flex gap-5'>
                <div>
                    <div className='flex gap-5 '>
                        <div className='h-16 w-16 bg-gray-500 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'></div>
                        <div>
                            <p>ROAST DUCK BREAST ------------------</p>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div><p className='text-orange-400'>-14.5$</p></div>
                    </div>
                    <div className='flex gap-5 mt-5 mb-5'>
                        <div className='h-16 w-16 bg-gray-500 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'></div>
                        <div>
                            <p>ROAST DUCK BREAST ------------------</p>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div><p className='text-orange-400'>-14.5$</p></div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='h-16 w-16 bg-gray-500 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'></div>
                        <div>
                            <p>ROAST DUCK BREAST ------------------</p>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div><p className='text-orange-400'>-14.5$</p></div>
                    </div>


                </div>
                <div className=''>
                    <div className='flex gap-5 '>
                        <div className='h-16 w-16 bg-gray-500 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'></div>
                        <div>
                            <p>ROAST DUCK BREAST ------------------</p>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div><p className='text-orange-400'>-14.5$</p></div>
                    </div>
                    <div className='flex gap-5 mt-5 mb-5'>
                        <div className='h-16 w-16 bg-gray-500 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'></div>
                        <div>
                            <p>ROAST DUCK BREAST ------------------</p>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div><p className='text-orange-400'>-14.5$</p></div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='h-16 w-16 bg-gray-500 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'></div>
                        <div>
                            <p>ROAST DUCK BREAST ------------------</p>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <div><p className='text-orange-400'>-14.5$</p></div>
                    </div>

                </div>
            </div>
            <div className='text-center mt-4 lg:mt-10'>
                <button className='text-white btn bg-gradient-to-b from-orange-100 to-orange-700 border-t-0'>View full menu</button>
            </div>
            <div className=' w-full mt-4 lg:mt-10'>
                <div className=' bg-black w-full h-[6em] flex items-center justify-center'>
                    <p className=' text-white  text-2xl font-bold '>Call us on +32470137244</p>
                </div>
            </div>

        </div>
    );
};

export default Menu;