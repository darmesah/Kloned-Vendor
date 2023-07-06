import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import RootLayout from "./pages/Root";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: "",
          children: [
            { index: true, element: "" },
            { path: "/products", element: <Products /> },
          ],
        },
      ])}
    />
  );
};

export default App;
