import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';


import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import PayUs from './components/payus/PayUs';
import Tabs from './layout/tabs/Tabs';

export default function App() {

  return (
    <div className="wrapper" data-lang="en">
      <div className="inner-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tabs />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="payus" element={<PayUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <div className="page-loader"></div>
      </div>
    </div>
  );
}



