import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    const error = useRouteError();

    let title = "An error occurred!";
    let message = "Something went wrong.";

    switch (error.status) {
        case 500:
            message = error.data.message;
            break;
        case 404:
            message = "Could not find resource or page.";
            title = "Not found!";
            break;
        default:
            break;
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
};

export default ErrorPage;
