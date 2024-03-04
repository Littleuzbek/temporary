import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Brands, { BrandDataLoader } from "./components/brands/Brands";
import Category, { CategoryDataLoader } from "./components/brands/Categrory";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ':id',
        element: <Brands />,
        loader: BrandDataLoader,
        errorElement: <NotFound />,
        children: [
          {
            path: ':id',
            element: <Category />,
            loader: CategoryDataLoader,
          },
          {
            path:  '*',
            element: <NotFound />
          }
        ]
      },
      {
        path:  '*',
        element: <NotFound />
      }
    ]
  );

  return <RouterProvider router={router} />;
}

export default App;
