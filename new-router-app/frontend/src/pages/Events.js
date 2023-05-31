import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;
    if (data.error) {
        return <p>{data.message}</p>;
    }
    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export async function loader() {
    const response = await fetch("http://localhost:8080/eventsaaaa");

    if (!response.ok) {
        // TODO: handle error later
        throw new Error({ message: "Could not fetch events..." });
    } else {
        return response;
    }
}

export default EventsPage;
