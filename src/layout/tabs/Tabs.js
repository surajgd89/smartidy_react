
import { Outlet, Link } from "react-router-dom";

import './Tabs.scss';

function Tabs() {



   return (
      <>
         <Outlet />
         <div className="tabs">
            <Link to="/" data-target="home" className="ripple-effect-1 active">
               <span>
                  <i className="fa-light fa-home-alt"></i>
                  <span>
                     <label className="en">Home</label>
                     <label className="mr">मुखपृष्ठ</label>
                     <label className="hn">मुखपृष्ठ</label>
                  </span>
               </span>
            </Link>
            <Link to="/about" data-target="about" className="ripple-effect-1">
               <span>
                  <i className="fa-light fa-briefcase"></i>
                  <span>
                     <label className="en">About</label>
                     <label className="mr">माहिती</label>
                     <label className="hn">जानकारी</label>
                  </span>
               </span>
            </Link>
            <Link to="/gallery" data-target="gallery" className="ripple-effect-1">
               <span>
                  <i className="fa-light fa-images"></i>
                  <span>
                     <label className="en">Gallery</label>
                     <label className="mr">गॅलरी</label>
                     <label className="hn">गॅलरी</label>
                  </span>
               </span>
            </Link>
            <Link to="/payus" data-target="payus" className="ripple-effect-1">
               <span>
                  <i className="fa-light fa-wallet"></i>
                  <span>
                     <label className="en">Pay Us</label>
                     <label className="mr">व्यवहार</label>
                     <label className="hn">व्यवहार</label>
                  </span>
               </span>
            </Link>
            <div className="tabs-floor"></div>
         </div>

      </>
   )
}

export default Tabs;
