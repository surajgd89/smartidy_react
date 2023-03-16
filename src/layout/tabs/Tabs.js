import './tabs.scss';

function Tabs() {
   return (
      <div className="tabs">
         <a href="javascript:void(0)" data-target="home" className="ripple-effect-1 active">
            <span>
               <i className="fa-light fa-home-alt"></i>
               <span>
                  <label className="en">Home</label>
                  <label className="mr">मुखपृष्ठ</label>
                  <label className="hn">मुखपृष्ठ</label>
               </span>
            </span>
         </a>
         <a href="javascript:void(0)" data-target="about" className="ripple-effect-1">
            <span>
               <i className="fa-light fa-briefcase"></i>
               <span>
                  <label className="en">About</label>
                  <label className="mr">माहिती</label>
                  <label className="hn">जानकारी</label>
               </span>
            </span>
         </a>
         <a href="javascript:void(0)" data-target="gallery" className="ripple-effect-1">
            <span>
               <i className="fa-light fa-images"></i>
               <span>
                  <label className="en">Gallery</label>
                  <label className="mr">गॅलरी</label>
                  <label className="hn">गॅलरी</label>
               </span>
            </span>
         </a>
         <a href="javascript:void(0)" data-target="payus" className="ripple-effect-1">
            <span>
               <i className="fa-light fa-wallet"></i>
               <span>
                  <label className="en">Pay Us</label>
                  <label className="mr">व्यवहार</label>
                  <label className="hn">व्यवहार</label>
               </span>
            </span>
         </a>
         <div className="tabs-floor"></div>
      </div>
   )
}

export default Tabs;
