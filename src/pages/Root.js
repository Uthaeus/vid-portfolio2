import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    return (
        <div className="root-container">
            <div className="root-column-one">
                <MainNavigation />
            </div>
            <div className="root-column-two">
                <Outlet />
            </div>
            <div className="root-column-three" />
        </div>
    );
}

export default RootLayout;