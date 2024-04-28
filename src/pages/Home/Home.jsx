import { useLoaderData } from "react-router-dom";

import Header from "../Shared/Header/Header";
import Guest from "../Guest";
import { Helmet } from "react-helmet-async";
import TouristSpots from "./TouristSpots";
import Countries from "../Countries";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import BestOffer from "../BestOffer";

const Home = () => {
    const place = useLoaderData();
    const sixItems = place.slice(0, 6);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header></Header>


            <div>
                <h1 className="text-center font-bold text-2xl mb-12 mt-[100px]">
                <Typewriter
                    words={['Tourists Spots']}
                    loop={2}
                    
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />
                    </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

                    {
                        sixItems.map(aPlace => <TouristSpots key={aPlace._id} place={aPlace}></TouristSpots>)
                    }
                </div>
            </div>
            <div>
                <Fade>
                    <h1 className="text-center font-bold text-2xl mt-[100px] "> 
                    <Typewriter
                    words={['Countries Section']}
                    loop={2}
                    
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />
                    </h1>
                </Fade>

                <Countries></Countries>
            </div>
                <BestOffer></BestOffer>

            <Guest></Guest>
        </div>
    );
};

export default Home;