import React from "react";
import data from "../assets/data.json";
import { Link } from "react-router-dom";

const EventsPage = () => {
    const DUMMY_EVENTS = data["dummy-events"];

    return (
        <>
            <h1>EventsPage </h1>
            <ul>
                {DUMMY_EVENTS &&
                    DUMMY_EVENTS.length > 0 &&
                    DUMMY_EVENTS.map((event) => (
                        <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default EventsPage;
