
import './modal.scss';
function SmsModal() {
   return (
      <div id="modal-sms" className="modal">
         <div className="modal-header">
            <div className="ico"><i className="fa-light fa-comment-alt-lines"></i></div>
            <div className="title">
               <label className="en">SMS</label>
               <label className="mr">मेसेज</label>
               <label className="hn">मेसेज</label>
            </div>
         </div>
         <div className="modal-body">
            <div className="item-list">
               <a href="sms:+911234567890" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Individual</label>
                     <label className="mr">वैयक्तिक</label>
                     <label className="hn">व्यक्तिगत</label>
                  </span>
                  <span className="val">1234567890</span>
               </a>
               <a href="sms:+919876543210" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Business</label>
                     <label className="mr">व्यवसाय</label>
                     <label className="hn">व्यवसाय</label>
                  </span>
                  <span className="val">9876543210</span>
               </a>
            </div>
         </div>
      </div>
   );
}
export default SmsModal()