import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Roots";
import Home from "../pages/Home";
import TvDetail from "../pages/TvDetail";
import Search from "../pages/Search";
import TvShows from "../pages/TvShows";
import Error from "../components/Error";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
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
        {
          path: "/tvshows",
          element: <TvShows />,
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
