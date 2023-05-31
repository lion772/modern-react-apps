import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/Layout";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "events", element: <EventsPage /> },
            { path: "events/:eventId", element: <EventDetailPage /> },
            { path: "events/new", element: <NewEventPage /> },
            { path: "events/:eventId/edit", element: <EditEventPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
