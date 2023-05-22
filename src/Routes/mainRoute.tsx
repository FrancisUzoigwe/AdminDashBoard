import {createBrowserRouter} from "react-router-dom"
import AdminLayout from "../Components/Block/Admin/AdminLayout"
import DashBoard from "../Pages/DashBoard"


export const mainRoute = createBrowserRouter([
    {
        path : "/",
        element : <AdminLayout/>,
        children : [
            {
                index : true,
                element: <DashBoard/>,
                path : "/"
            }
        ]
    }
])