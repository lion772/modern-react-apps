import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayout";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayoutPage from "./pages/EventsRootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayoutPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventsRootLayoutPage />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: async () => {
                            const response = await fetch(
                                "http://localhost:8080/events"
                            );

                            if (!response.ok) {
                                // TODO: handle error later
                            } else {
                                const resData = await response.json();
                                return resData.events;
                            }
                        },
                    },
                    {
                        path: ":eventId",
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
