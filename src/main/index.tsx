import React from "react";
import {createRoot} from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import {Root} from "./routes/Root";
import {ErrorPage} from "./routes/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);

const rootElement = document.getElementById('application');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
