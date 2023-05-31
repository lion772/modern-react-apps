import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/Layout";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/events", element: <EventsPage /> },
            { path: "/events/:eventId", element: <EventDetailPage /> },
            { path: "/", element: HomePage },
            { path: "/", element: HomePage },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
