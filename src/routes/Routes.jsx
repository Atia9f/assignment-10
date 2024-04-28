import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/news/News";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import PrivateProfile from "./PrivateProfile";
import PrivateBooking from "./PrivateBooking";
import MyList from "../pages/MyList";
import AddTourists from "../pages/AddTourists";
import AllTouristSpot from "../pages/AllTouristSpot";
import UpdatePlace from "../pages/UpdatePlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/place'),
      },
      {
        path: '/allSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/place')

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/news/:id',
        element: <PrivateRoute> <News></News></PrivateRoute>,
      },
      // {
      //   path: '/country/:country_Name',
      //   element: <CountrySpot></CountrySpot>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/place/${params.country_Name}`)
      // },

      {
        path: '/myList',
        element: <PrivateProfile><MyList></MyList></PrivateProfile>
      },
      {
        path: '/addTourists',
        element: <PrivateBooking><AddTourists></AddTourists></PrivateBooking>
      },
      {
        path: '/updateCoffee/:id',
        element: <PrivateBooking><UpdatePlace></UpdatePlace></PrivateBooking>,
        loader: ({ params }) => fetch(`http://localhost:5000/place/${params.id}`)
      }
    ]
  },
]);

export default router;