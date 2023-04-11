import { useEffect } from "react";
import { useGlobalContext } from '../../context';
import './Modal.scss';
function CallModal(props) {
   let setModalOpen = props.modal;
   const { Data } = useGlobalContext();
   useEffect(() => {
      console.log(Data)
   }, [])

   return (
      <div className="modal-backdrop">
         <div className="modal">
            <a href="#" className='close-modal' onClick={(e) => { e.preventDefault(); setModalOpen({ 'CallModal': false }) }}><i className='fa-light fa-times'></i></a>
            <div className="modal-header">
               <div className="ico"><i className="fa-light fa-phone"></i></div>
               <div className="title">
                  <label className="en">Call</label>
                  <label className="mr">कॉल</label>
                  <label className="hn">कॉल</label>
               </div>
            </div>
            <div className="modal-body">
               <div className="item-list numbers">
                  <a href="tel:+911234567890" className="item-row add-vcard ">
                     <span className="lbl">
                        <label className="en">Individual</label>
                        <label className="mr">वैयक्तिक</label>
                        <label className="hn">व्यक्तिगत</label>
                     </span>
                     <span className="val">1234567890</span>
                  </a>
                  <a href="tel:+919876543210" className="item-row ">
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
      </div>

   );
}
export default CallModal;