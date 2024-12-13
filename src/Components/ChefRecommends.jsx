import React from 'react';
import img1 from '../assets/home/slide5.jpg'

const ChefRecommends = () => {
    return (

        <div className=' mt-4 lg:mt-10 flex gap-5 justify-center'>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={img1}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Caeser Salad!</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-b from-orange-100 to-orange-700 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={img1}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Caeser Salad!</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-b from-orange-100 to-orange-700 text-white">Add to Cart</button>
                    </div>
                </div>
            </div><div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={img1}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Caeser Salad!</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-b from-orange-100 to-orange-700 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>

            
        </div>

    );
};

export default ChefRecommends;