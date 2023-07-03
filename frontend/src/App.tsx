import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import RootLayout from "./pages/Root";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: "",
          children: [{ index: true, element: "" }],
        },
      ])}
    />
  );
};

export default App;
