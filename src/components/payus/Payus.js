import './PayUs.scss';

import PGLogoDefault from '../../assets/images/pg-logo-default.jpg';
import GpayLogo from "../../assets/images/g-pay.png";
import PhonePayLogo from "../../assets/images/p-pay.png";
import PayTmLogo from "../../assets/images/paytm.png";
import BhimLogo from "../../assets/images/bhim.png";

function PayUs(props) {
   const setModalOpen = props.setModalOpen;
   return (
      <div className="page" id="payus">
         <div className="header">
            <div className="title">
               <label className="en">Pay Us</label>
               <label className="mr">व्यवहार</label>
               <label className="hn">व्यवहार</label>
            </div>
            <div className="action">
               <a onClick={() => { setModalOpen({ 'ShareModal': true }) }} className="share-all" title="Share Via">
                  <i className="fa-light fa-share-alt"></i>
               </a>
            </div>
         </div>
         <div className="content">
            <div className="upi-sec" data-not-configured="UPI ID not configured">
               <a onClick={() => { setModalOpen({ 'UpiPaymentModal': true }) }} className="upi-btn ripple-effect-2">
                  <span>
                     <label className="en">Pay with UPI</label>
                     <label className="mr">UPI द्वारे पैसे पाठवा</label>
                     <label className="hn">UPI के माध्यम से पैसे भेजें</label>
                  </span>
                  <span>
                     <label className="en">UPI payment apps like Google Pay, Paytm, PhonePe, Bhim
                        etc.</label>
                     <label className="mr">फक्त UPI व्यवहारासाठी Google Pay, Paytm, PhonePe,
                        Bhim इत्यादी</label>
                     <label className="hn">केवल UPI देन के लिए Google Pay, Paytm, PhonePe, Bhim
                        आदि</label>
                  </span>
                  <div className="upi-logos">
                     <img src={GpayLogo} />
                     <img src={PhonePayLogo} />
                     <img src={PayTmLogo} />
                     <img src={BhimLogo} />
                  </div>
               </a>
               <div className="upi-id">
                  <span id="copy-upi-id">your_upi_id@okaxis</span> <i className="fa-light fa-clone copy-to-clipboard"
                     data-clipboard-target="#copy-upi-id"></i>
               </div>
            </div>
            <div className="pg-sec" data-not-configured="Payment gateway link not configured">
               <a href="#" className="pg-btn ripple-effect-2">
                  <span>
                     <label className="en">Make Payment</label>
                     <label className="mr">व्यवहार करा</label>
                     <label className="hn">व्यवहार कीजिए</label>
                  </span>
                  <span>
                     <label className="en">Make a payment using your Netbanking & UPI apps.</label>
                     <label className="mr"> UPI व Net Banking च्या व्यवहारासाठी </label>
                     <label className="hn"> UPI और Net Banking के व्यवहार के लिए </label>
                  </span>
                  <div className="pg-logos">
                     <img src={PGLogoDefault} />
                  </div>
               </a>
            </div>
            <div className="account-sec" data-not-configured="We have not any bank account details">
               <div className="account-data" id="copy-account-details-saving">
                  <span className="copy copy-to-clipboard ripple-effect-1"
                     data-clipboard-target="#copy-account-details-saving">
                     <i className="fa-light fa-clone"></i></span>
                  <div className="acc-row">
                     <div className="lbl">
                        <label className="en">Name</label>
                        <label className="mr">नाव</label>
                        <label className="hn">नाम</label>
                     </div>
                     <div className="val">Full Name</div>
                  </div>
                  <div className="acc-row">
                     <div className="lbl">
                        <label className="en">Bank Name</label>
                        <label className="mr">बँकेचे नाव</label>
                        <label className="hn">बैंक का नाम</label>
                     </div>
                     <div className="val">Bank Name</div>
                  </div>
                  <div className="acc-row">
                     <div className="lbl">
                        <label className="en">Account Number</label>
                        <label className="mr">खाते क्रमांक</label>
                        <label className="hn">खाता क्रमांक</label>
                     </div>
                     <div className="val"><span id="accountNo">1234567890</span><i
                        data-clipboard-target="#accountNo" className="fa-light fa-clone copy-to-clipboard"></i>
                     </div>
                  </div>
                  <div className="acc-row">
                     <div className="lbl">
                        <label className="en">IFSC Code</label>
                        <label className="mr">IFSC कोड</label>
                        <label className="hn">IFSC कोड</label>
                     </div>
                     <div className="val"><span id="ifscNo">ABCD0000001</span><i data-clipboard-target="#ifscNo"
                        className="fa-light fa-clone copy-to-clipboard"></i></div>
                  </div>
                  <div className="acc-row">
                     <div className="lbl">
                        <label className="en">Account Type</label>
                        <label className="mr">खाते प्रकार</label>
                        <label className="hn">खाते का प्रकार</label>
                     </div>
                     <div className="val">Saving / Current</div>
                  </div>
                  <div className="acc-row">
                     <div className="lbl">
                        <label className="en">Branch</label>
                        <label className="mr">शाखा</label>
                        <label className="hn">शाखा</label>
                     </div>
                     <div className="val">Location - 400000</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default PayUs;