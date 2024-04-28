import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const AddTourists = () => {

    const { user } = useContext(AuthContext)
    const handleAddProduct = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const image = form.get('image');
        const name = form.get('name');
        const country_Name = form.get('country');
        const spot = form.get('spot');
        const location = form.get('location');
        const description = form.get('description');
        const average_cost = form.get('cost');
        const season = form.get('season');
        const time = form.get('time');
        const visitor = form.get('visitor');
        const email = form.get('email');
        const userEmail = user.email;
        const info = { image, name, country_Name, spot, location, description, average_cost, season, time, visitor, email, userEmail };


        fetch("https://tourism-server-three.vercel.app/addPlace", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    toast.success('Successfully added');
                }
               
            })
        console.log(info);
    }

    return (
        <div className='flex justify-center items-center'>
            <Helmet>
                <title>
                    AddTouristSpot
                </title>
            </Helmet>

            <form onSubmit={handleAddProduct}>
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center mt-10">

                    <div className=" mt-10">
                        <div className="flex flex-col md:flex-row gap-10">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl"> Image </span>
                                </label>
                                <input type="text" name="image" placeholder="image" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Tourists_spot_name</span>
                                </label>
                                <input type="text" name="spot" placeholder="tourists_spot_name" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Country_Name</span>
                                </label>
                                <input type="text" name="country" placeholder="Country_Name" className="input input-bordered" />
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row gap-10 mt-8">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Location</span>
                                </label>
                                <input type="text" name="location" placeholder="Location" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Short description</span>
                                </label>
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl">Average_cost</span>
                                </label>
                                <input type="text" name="cost" placeholder="Average_cost" className="input input-bordered" />
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row gap-10 mt-8">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl">Seasonality</span>
                                </label>
                                <select name='season' className="select select-bordered join-item">
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
                                <input type="text" name="time" placeholder="How many days" className="input input-bordered" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl"> TotaVisitorsPerYear</span>
                                </label>
                                <input type="number" name="visitor" placeholder="TotaVisitorsPerYear" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 mt-8">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input  input-bordered" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input  input-bordered" />
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

export default AddTourists;