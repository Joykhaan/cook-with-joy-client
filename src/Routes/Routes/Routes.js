import { createBrowserRouter } from "react-router-dom";
import Tutorials from "../../Components/Shared/Tutorials/Tutorials";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import TutorialDetails from "../../Pages/TutorialDetails/TutorialDetails";

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
                path:'courses/1/tutorial/:id',
                element: <TutorialDetails></TutorialDetails>,
                loader:({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`)
            },
            
        ]
    },
    {
        path:'*',
        element:<Blog></Blog>
    }
])


