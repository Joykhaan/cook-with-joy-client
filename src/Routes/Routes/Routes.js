import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";

export const route= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'courses',
                element:<Courses></Courses>
            },
            {
                path:'faq',
                element: <Faq></Faq>
            }
        ]
    },
    {
        path:'*',
        element:<Blog></Blog>
    }
])


