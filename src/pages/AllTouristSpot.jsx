
import { Link, useLoaderData } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const AllTouristSpot = () => {
    const allPlace = useLoaderData();
    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
                allPlace.map(place => (
                    <div key={place._id} data-aos="zoom-in-up" className="  mx-auto rounded-lg mb-16 border-b-2  shadow-xl">
                        <div className="card">
                            <figure><img className="h-[250px]" src={place.image} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="font-poppins"></h2>
                                {
                                    place.description.length > 200 ? <p>{place.description.slice(0, 200)}</p>
                                        :
                                        <p>{place.description}</p>
                                }


                                <div className="">
                                    <p>Country Name: {place.country_Name}</p>
                                    <p>Spot: {place.spot}</p>
                                </div>
                            </div>
                            <div className=" text-center">
                                <Link className="text-center" to={`/news/${place._id}`}><button className="btn w-1/2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default AllTouristSpot;