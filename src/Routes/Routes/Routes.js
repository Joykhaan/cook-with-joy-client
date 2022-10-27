import { createBrowserRouter } from "react-router-dom";
import Tutorials from "../../Components/Shared/Tutorials/Tutorials";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TutorialDetails from "../../Pages/TutorialDetails/TutorialDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const route= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Courses></Courses>,
                loader:() => fetch('http://localhost:5000/tutorial')
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'courses/:id',
                element: <Tutorials></Tutorials>,
                loader:({params}) => fetch(`http://localhost:5000/sub-tutorial/${params.id}`)
            },
            {
                path:'faq',
                element: <Faq></Faq>
            },
            {
                path:'tutorial/:id',
                element: <TutorialDetails></TutorialDetails>,
                loader:({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`)
            },
            {
                path:'courses/:id/tutorial/:id',
                element: <TutorialDetails></TutorialDetails>,
                loader:({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'/tutorial/:id/:title/checkout',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`)
            }
        ]
    },
    {
        path:'*',
        element: <h1 className="text-6xl">404 this page not found</h1>
    }
])


