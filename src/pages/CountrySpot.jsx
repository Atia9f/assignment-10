// import { useEffect, useState } from "react";
// import {  useParams } from "react-router-dom";

// const CountrySpot = () => {
//     const place = useParams();
//     console.log(place)
//     const {country_Name} = place;
//     console.log(country_Name)
//     const [spot, setSpot] = useState([]);
//     useEffect(() => {
//         fetch(`https://tourism-server-three.vercel.app/findMatchingItems/${country_Name}`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 setSpot(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching matching items:', error);
//                 // Optionally, you can set an error state here
//             });
//     }, [country_Name]);
//     console.log(spot)
//     return (
//         <div>
// {
//     spot.map(item => (
//         <div key={item.country_Name} data-aos="zoom-in-up" className="bg-red-100 mx-auto rounded-lg mb-16 border-b-2 shadow-xl">
//             <div className="card">
//                 <figure><img className="w-1/2" src={item.image} alt="Shoes" /></figure>
//                 <div className="card-body text-center">
//                     <h2 className="font-poppins">{item.name}</h2>
//                     <p>{item.description}</p>
//                     <div>
//                         <p>Country Name: {item.country_Name}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ))
// }




//         </div>
//     );
// };

// export default CountrySpot;