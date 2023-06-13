import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayout";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as deleteEventAction,
} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayoutPage from "./pages/EventsRootLayout";
import ErrorPage from "./pages/Error";
import { action as postPatchEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const HomePage = lazy(() => import("./pages/Home"));
const EventsPage = lazy(() => import("./pages/Events"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayoutPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<p>loading</p>}>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: "events",
                element: <EventsRootLayoutPage />,
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<p>loading</p>}>
                                <EventsPage />
                            </Suspense>
                        ),
                        loader: () =>
                            import("./pages/Events").then((mod) =>
                                mod.loader()
                            ),
                    },
                    {
                        path: ":eventId",
                        id: "event-detail",
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: postPatchEventAction,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: postPatchEventAction,
                    },
                ],
            },
            {
                path: "newsletter",
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
