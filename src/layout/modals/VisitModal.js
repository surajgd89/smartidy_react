
import './Modal.scss';
function VisitModal(props) {
   let setModalOpen = props.modal;

   return (

      <div className="modal-backdrop">
         <div className="modal">
            <a href="#" className='close-modal' onClick={(e) => { e.preventDefault(); setModalOpen({ 'VisitModal': false }) }} ><i className='fa-light fa-times'></i></a>
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
                  <a href="http://www.shreeshadigital.com/" className="item-row ">
                     <span className="lbl">
                        <label className="en">Website</label>
                        <label className="mr">संकेतस्थळ</label>
                        <label className="hn">वेबसाइट</label>
                     </span>
                     <span className="val">www.businessname.com</span>
                  </a>
                  <a href="http://www.shreeshadigital.com/" className="item-row ">
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
      </div>

   );
}
export default VisitModal;