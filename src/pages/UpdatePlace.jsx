import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';




const UpdatePlace = () => {
    const place = useLoaderData()
    const { _id, image, country_Name, spot, location, description, average_cost, season, time, visitor  } = place;


    const handleUpdatePlace = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const image = form.get('image');
        const country_Name = form.get('country');
        const spot = form.get('spot');
        const location = form.get('location');
        const description = form.get('description');
        const average_cost = form.get('cost');
        const season = form.get('season');
        const time = form.get('time');
        const visitor = form.get('visitor');
        const updatePlace = { image, country_Name, spot, location, description, average_cost, season, time, visitor };

        fetch(`http://localhost:5000/place/${_id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updatePlace)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Successfully Update');
                }
            })


    }

    return (
        <div className='flex justify-center items-center'>
            <Helmet>
                <title>
                    Booking
                </title>
            </Helmet>

            <form onSubmit={handleUpdatePlace}>
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center mt-10">

                    <div className=" mt-10">
                        <div className="flex flex-col md:flex-row gap-10">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl"> Image </span>
                                </label>
                                <input type="text" name="image" defaultValue={image} placeholder="image" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Tourists_spot_name</span>
                                </label>
                                <input type="text" name="spot" defaultValue={spot} placeholder="tourists_spot_name" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Country_Name</span>
                                </label>
                                <input type="text" name="country" defaultValue={country_Name} placeholder="Country_Name" className="input input-bordered" />
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row gap-10 mt-8">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Location</span>
                                </label>
                                <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Short description</span>
                                </label>
                                <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Average_cost</span>
                                </label>
                                <input type="text" name="cost" defaultValue={average_cost} placeholder="Average_cost" className="input input-bordered" />
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row gap-10 mt-8">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl">Seasonality</span>
                                </label>
                                <select name='season'defaultValue={season} className="select select-bordered join-item">
                                    <option value='winter' selected>Winter</option>
                                    <option value="summer" selected>Summer</option>
                                    <option value="rainy">Rainy</option>
                                    <option value="spring">Spring</option>

                                </select>


                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl">Travel_time</span>
                                </label>
                                <input type="text" name="time" defaultValue={time} placeholder="How many days" className="input input-bordered" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl"> TotaVisitorsPerYear</span>
                                </label>
                                <input type="number" name="visitor" defaultValue={visitor} placeholder="TotaVisitorsPerYear" className="input input-bordered" />
                            </div>
                        </div>
                        <button className="btn mt-6 w-full bg-[#F9A51A] text-white">Add</button>
                    </div>
                    

                </div>


            </form >
            <ToastContainer />
        </div >
    );

};

export default UpdatePlace;