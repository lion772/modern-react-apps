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
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw new Response(
            JSON.stringify({
                message: "Could not fetch events...",
            }),
            { status: 500 }
        );
    } else {
        return response;
    }
}

export default EventsPage;
