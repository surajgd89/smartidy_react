
import './modal.scss';
function VisitModal() {
   return (
      <div id="modal-visit" className="modal">
         <div className="modal-header">
            <div className="ico"><i className="fa-light fa-external-link-square"></i></div>
            <div className="title">
               <label className="en">Links</label>
               <label className="mr">लिंक्स</label>
               <label className="hn">लिंक्स</label>
            </div>
         </div>
         <div className="modal-body">
            <div className="item-list">
               <a href="http://www.shreeshadigital.com/" target="_blank" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Website</label>
                     <label className="mr">संकेतस्थळ</label>
                     <label className="hn">वेबसाइट</label>
                  </span>
                  <span className="val">www.businessname.com</span>
               </a>
               <a href="http://www.shreeshadigital.com/" target="_blank" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">ePortfolio</label>
                     <label className="mr">ePortfolio</label>
                     <label className="hn">ePortfolio</label>
                  </span>
                  <span className="val">www.eportfolio.com</span>
               </a>
            </div>
         </div>
      </div>
   );
}
export default VisitModal()