import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, [])


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/place/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Place has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table text-xl table-xs">
                    <thead>
                        <tr>
                            <th></th>

                            <th>Spot Name</th>
                            <th>Country Name</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            item.map((p, index) => (
                                <tr key={p._id}>
                                    <th >{index + 1}</th>

                                    <td>{p.spot}</td>
                                    <td>{p.country_Name}</td>
                                    <td>{p.location}</td>

                                    <td>
                                        <Link to={`/updateCoffee/${p._id}`}>
                                            <button>Update</button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDelete(p._id)}>Delete</button></td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>



    );
};

export default MyList;
