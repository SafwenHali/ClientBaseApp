import React from "react";
import {Route,BrowserRouter,Routes} from "react-router-dom";

import Home from "../pages/HomeScreen";  
const Router = () => {
      return(       
            <BrowserRouter>
                  <Routes >
                    <Route path="*" element={<Home />}/>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                  </Routes>
              </BrowserRouter>
      )
  }
  export default Router;