import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./server"; //mirage api

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Footer from "./components/Footer";
import HostVan from "./pages/Host/HostVan";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
import HostVanInfo from "./pages/Host/HostVanInfo";
import GlobalStyle from "./GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VanDetail />} />

                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="vans" element={<HostVan />} />
                            <Route path="vans/:id" element={<HostVanDetail />}>
                                <Route index element={<HostVanInfo />} />
                                <Route
                                    path="pricing"
                                    element={<HostVanPricing />}
                                />
                                <Route
                                    path="photos"
                                    element={<HostVanPhoto />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
