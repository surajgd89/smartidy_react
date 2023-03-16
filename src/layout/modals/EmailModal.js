
import './modal.scss';
function EmailModal() {
   return (
      <div id="modal-email" className="modal">
         <div className="modal-header">
            <div className="ico"><i className="fa-light fa-envelope"></i></div>
            <div className="title">
               <label className="en">Email</label>
               <label className="mr">ई-मेल</label>
               <label className="hn">ई-मेल</label>
            </div>
         </div>
         <div className="modal-body">
            <div className="item-list emails">
               <a href="mailto:suraj.gd89@gmail.com" target="_blank" className="item-row add-vcard ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Individual</label>
                     <label className="mr">वैयक्तिक</label>
                     <label className="hn">व्यक्तिगत</label>
                  </span>
                  <span className="val">individual@gmail.com</span>
               </a>
               <a href="mailto:mail.shreeshadigital@gmail.com" target="_blank" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Business</label>
                     <label className="mr">व्यवसाय</label>
                     <label className="hn">व्यवसाय</label>
                  </span>
                  <span className="val">business@gmail.com</span>
               </a>
            </div>
         </div>
      </div>
   );
}
export default EmailModal()