
import './modal.scss';
function UpiPaymentModal() {
   return (
      <div id="modal-upi-payment" className="modal">
         <div className="modal-header">
            <div className="ico"><i className="fa-light fa-wallet"></i></div>
            <div className="title">
               <label className="en">Pay with UPI</label>
               <label className="mr">UPI द्वारा व्यवहार करा</label>
               <label className="hn">UPI के माध्यम से पैसे भेजें</label>
            </div>
         </div>
         <div className="modal-body">
            <div className="pay-form">
               <form id="payForm">
                  <div className="control-group">
                     <input type="number" id="upiAmt" name="upiAmt" placeholder="Enter Amount" maxlength="5"
                        required />
                  </div>
                  <div className="control-group">
                     <input type="text" id="payDesc" name="payDesc" placeholder="Enter Description" maxlength="80"
                        required />
                  </div>
                  <div className="action-sec">
                     <a href="javascript:void(0)" id="paylink" className="act-btn ripple-effect-1">
                        <label className="en">Pay</label>
                        <label className="mr">देय द्या</label>
                        <label className="hn">भुगतान करें</label>
                        &nbsp;&nbsp;<i className="fa-light fa-rupee-sign"></i>&nbsp;&nbsp;
                        <span id="upiAmount">0</span>
                     </a>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
export default UpiPaymentModal()