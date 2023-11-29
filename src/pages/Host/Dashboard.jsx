import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Host Dashboard</h1>
            <Outlet />
        </>
    );
}

export default Dashboard;
