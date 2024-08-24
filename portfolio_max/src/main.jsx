import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

// Why include index.html path? This is a hacky way of redirecting because
// when redirecting from subdomain, it loads default page on root domain which
// is forced to be index.html...hence the weird hack here
// TODO: Gotta be a better way to do this???
// TODO: Still doesn't seem to be working
const router = createBrowserRouter([
  {
    path: "/projects",
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    index: true,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/index.html",
    element: <Navigate to="/" replace={true} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
