import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Countries = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountry(data)
            })
    }, [])
    console.log(country)
    return (
        <div className="">

            {
                country.map(c => (
                    <Link key={c._id} className="text-center" to={`/country/${c.country_Name}`}>
                        <div  className="flex flex-col-reverse lg:flex-row  justify-center gap-10 items-center ">
                            <Fade>
                                <div className="mt-2 lg:mt-20 text-center">
                                    <div className="w-full lg:w-[400px]">
                                        {
                                            c.description.length > 200 ? <p>{c.description.slice(0, 200)}</p>
                                                :
                                                <p>{c.description}</p>
                                        }
                                        <div className="mt-2">
                                            <p className="text-xl font-medium text-red-500">Country Name: {c.country_Name}</p>
                                        </div>

                                    </div>
                                </div>
                            </Fade>

                            <div className="mt-20 rounded-2xl">
                                <img className=" w-full lg:w-[400px] rounded-2xl" src={c.image} alt="Shoes" />
                            </div>

                        </div>
                    </Link>




                    // <div key={c._id} className=" bg-red-100 mx-auto rounded-lg mb-16 border-b-2  shadow-xl">
                    //     <div className="card">
                    //         <figure><img className="w-1/2" src={c.image} alt="Shoes" /></figure>
                    //         <div className="card-body text-center">
                    //             <h2 className="font-poppins"></h2>
                    //             {
                    //                 c.description.length > 200 ? <p>{c.description.slice(0, 200)}</p>
                    //                     :
                    //                     <p>{c.description}</p>
                    //             }


                    //             <div className="">
                    //                 <p>Country Name: {c.country_Name}</p>
                    //             </div>
                    //         </div>
                    //         <div className=" text-center">
                    //             <Link className="text-center" to={`/country/${c.country_Name}`}><button className="btn w-1/2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white">View Details</button></Link>
                    //         </div>
                    //     </div>
                    // </div>
                ))
            }

        </div>
    );
};

export default Countries;