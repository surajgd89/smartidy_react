
import './Modal.scss';
function ShareModal(props) {
   let setModalOpen = props.modal;
   return (
      <div className="modal-backdrop">
         <div className="modal">
            <a className='close-modal' onClick={() => { setModalOpen({ 'ShareModal': false }) }}><i className='fa-light fa-times'></i></a>
            <div className="modal-header">
               <div className="ico"><i className="fa-light fa-share-alt"></i></div>
               <div className="title">
                  <label className="en">Share</label>
                  <label className="mr">शेअर</label>
                  <label className="hn">शेअर</label>
               </div>
            </div>
            <div className="modal-body">
               <div className="share-via">
                  <a href="#" id="whatsapp-share" className="share-opt whatsapp ripple-effect-1"
                  >
                     <i className="fab fa-whatsapp"></i>
                     <span>WhatsApp</span>
                  </a>
                  <a href="#" id="telegram-share" className="share-opt telegram ripple-effect-1"
                  >
                     <i className="fab fa-telegram"></i>
                     <span>Telegram</span>
                  </a>
                  <a href="#" id="sms-share" className="share-opt sms ripple-effect-1" >
                     <i className="fa-light fa-comment-alt-lines"></i>
                     <span>SMS</span>
                  </a>
                  <a href="#" id="email-share" className="share-opt email ripple-effect-1" >
                     <i className="fa-light fa-envelope"></i>
                     <span>Email</span>
                  </a>
               </div>
            </div>
         </div>
      </div>

   );
}
export default ShareModal;