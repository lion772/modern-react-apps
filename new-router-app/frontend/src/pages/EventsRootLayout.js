import React from "react";
import { Outlet } from "react-router-dom";
import ElementNavigation from "../components/EventsNavigation";

const EventsRootLayoutPage = () => {
    return (
        <main>
            <ElementNavigation />
            <Outlet />
        </main>
    );
};

export default EventsRootLayoutPage;
