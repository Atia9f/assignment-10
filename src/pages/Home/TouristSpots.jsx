import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const TouristSpots = ({ place }) => {
    console.log(place)
    const { image, description, _id, country_Name, spot } = place;
    return (
        <div>
           
            <div data-aos="zoom-in-up" className="card mb-16 border-b-2  shadow-xl">
                <figure><img className="h-[250px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=""></h2>
                    {
                        description.length > 200 ? <p>{description.slice(0, 200)}</p>
                            :
                            <p>{description}</p>
                    }


                    <div className="text-">
                        <p>Country Name: {country_Name}</p>
                        <p>Spot: {spot}</p>
                    </div>
                </div>
                <Link className="w-full" to={`/news/${_id}`}><button className="btn w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white">View Details</button></Link>
            </div>

        </div>
    );
};

export default TouristSpots;