import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const News = () => {

    const { id } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/place")
            .then(res => res.json())

            .then(data => {
                console.log(data)
                const newsDetails = data.find(item => item._id === id);
                setDetails(newsDetails);
            })
    }, [id]);
    console.log(details)

    return (
        <div className="mb-20">
            <Helmet><title>
                Details
            </title>
            </Helmet>
            <div>
                <img className="w-full rounded-2xl h-[550px]" src={details.image} alt="" />
                <p className="mt-20 font-semibold text-2xl">{details.spot}</p>
                <p className="mt-20">{details.description}</p>
            </div>
            <h1 className="my-10 font-semibold text-2xl">Details:</h1>
            <div className="flex ">
                <div className="w-full md:w-2/3">

                    <div className="flex space-x-16 border-t border-b p-3">
                        <p>Country Name:</p>
                        <p>{details.country_Name}</p>
                    </div>
                    <div className="flex space-x-16 border-t border-b p-3">
                        <p>Season:</p>
                        <p>{details.season}</p>
                    </div>

                    <div className="flex  border-t border-b p-3">
                        <p className="mr-[100px]">Time:</p>
                        <p>{details.time}</p>
                    </div>
                    <div className="flex space-x-16 border-t border-b p-3">
                        <p>Average_cost:</p>
                        <p>{details.average_cost}</p>
                    </div>
                    <div className="flex space-x-16 border-t border-b p-3">
                        <p>Location:</p>
                        <p>{details.location}</p>
                    </div>
                    <div className="flex space-x-16 border-t border-b p-3">
                        <p>Visitor Per Yar:</p>
                        <p>{details.visitor}</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default News;