import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from '../components/Roots'
import Home from '../pages/Home'
import TvDetail from '../pages/TvDetail'

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: [
                {
                path:'/',
                element:<Home/>
                },
                {
                  path: 'tvshows/:id',
                  element: <TvDetail/>,
                }
            ]
        },
    ])
  return (
    <>
    <RouterProvider router= {router} />
    </>
  )
}