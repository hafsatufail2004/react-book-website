import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/about/about";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
