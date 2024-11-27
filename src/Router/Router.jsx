import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../AuthComponents/Register";
import Login from "../AuthComponents/Login";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyProfile from "../Components/MyProfile/MyProfile";
import Home from "../Components/Home/Home";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import ForgotPassword from "../Components/ForgatPassword/ForgatPassword";
import Error from "../Components/Error/Error";
import StartLearning from "../Components/StartLearning/StartLearning";
import Lesson from "../Components/StartLearning/Lesson/Lesson";
import ChildrenError from "../Components/Error/ChildrenError";
import Tutorial from "../Components/Tutorial/Tutorial";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/my-profile',
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: '/update-profile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/forgat-password/:email',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/start-learning',
                element: <PrivateRoutes><StartLearning></StartLearning></PrivateRoutes>,
                loader: () => fetch('/Lessons.json')
            },
            {
                path: '/tutorial',
                element: <PrivateRoutes><Tutorial></Tutorial></PrivateRoutes>
            },
            {
                path: '/lesson/:id',
                element: <PrivateRoutes><Lesson></Lesson></PrivateRoutes>,
                loader: ()=> fetch('/AllWord.json')
            },
            {
                path: '*',
                element: <ChildrenError></ChildrenError>
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;