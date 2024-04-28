// import { useEffect, useState } from "react";
// import MyList from "./MyList";

// const ListItem = () => {
//     const [spot,setSpot]= useState([])
//    useEffect(()=>{
//     fetch('http://localhost:5000/place')
//     .then(res=> res.json())
//     .then(data=>{
//         setSpot(data)
        
//     })
//    },[])
//    console.log(spot)
//     return (
//         <div>
//              {
//                 spot.map(p2=><MyList key={p2._id} _id={p2._id}></MyList>)
//              }
//         </div>
//     );
// };

// export default ListItem;