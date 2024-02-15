import { createBrowserRouter } from "react-router-dom"
import { Home } from "../page/home/Home";
import { Sobre } from "../page/sobre/Sobre";
import { Loja } from "../page/loja/Loja" 
import { Contato } from "../page/contato/Contato" 


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path:'/sobre',
                element : <Sobre/>
            },{
                path:'/loja',
                element:<Loja/>
            },
            {
                path:'/contato',
                element:<Contato/>
            }
        ]
    },
]);