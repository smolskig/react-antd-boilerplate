import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
  const routes = [{ path: "/", element: Home }];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={true}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
