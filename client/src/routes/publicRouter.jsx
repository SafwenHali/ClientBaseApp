import React from "react";
import {Route,BrowserRouter,Routes} from "react-router-dom";

import MainLayout from "../layout/MainLayout"

import Home from "../pages/HomeScreen"; 
import NotFound from "../pages/NotFoundScreen";  
const Router = () => {
      return(       
            <BrowserRouter>
                  <Routes>     
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<MainLayout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/Home" element={<Home />} />
                    </Route>
                  </Routes>
              </BrowserRouter>
      )
  }
  export default Router;