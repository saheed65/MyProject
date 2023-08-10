import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Roots";
import Home from "../pages/Home";
import TvDetail from "../pages/TvDetail";
import Search from "../pages/Search";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "tvshows/:id",
          element: <TvDetail />,
        },
        {
          path: "Search",
          element: <Search />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
