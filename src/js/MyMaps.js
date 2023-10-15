import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Registration from './Registration';
import Report from './Report';
import About from './About';
import Header from "./Header";
import Myheader from "./MyHeader";
import MyHeader from "./MyHeader";
import Cityform from "./Cityform";
import Areaform from "./Areaform";
import Stateform from "./Stateform";

const Mymaps = () => {

    return (

        <div>

            <BrowserRouter>
                {/* <Header /> */}
                <MyHeader/>
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='registration' element={<Registration />} />
                    <Route path='report' element={<Report />} />
                    <Route path="/update/:id" element={<Registration />} />
                    <Route path='state' element={<Stateform />} />
                    <Route path='City' element={<Cityform />} />
                    <Route path='Area' element={<Areaform />} />
                </Routes>


            </BrowserRouter>

        </div>
    );

}
export default Mymaps;