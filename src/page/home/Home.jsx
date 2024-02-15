import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/menu/Menu";

export const Home = () => {
    const location = useLocation().pathname;

    return (
        <>
            <Menu />
            {
                location !== '/' ? <Outlet /> : <h1>Olá aqui é a home</h1>
            }
        </>
    );
};
