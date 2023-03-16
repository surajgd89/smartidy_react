
import './modal.scss';
function ShareModal() {
   return (
      <div id="modal-share" className="modal">
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
               <a href="javascript:void(0)" id="whatsapp-share" className="share-opt whatsapp ripple-effect-1"
                  target="_blank">
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp</span>
               </a>
               <a href="javascript:void(0)" id="telegram-share" className="share-opt telegram ripple-effect-1"
                  target="_blank">
                  <i className="fab fa-telegram"></i>
                  <span>Telegram</span>
               </a>
               <a href="javascript:void(0)" id="sms-share" className="share-opt sms ripple-effect-1" target="_blank">
                  <i className="fa-light fa-comment-alt-lines"></i>
                  <span>SMS</span>
               </a>
               <a href="javascript:void(0)" id="email-share" className="share-opt email ripple-effect-1" target="_blank">
                  <i className="fa-light fa-envelope"></i>
                  <span>Email</span>
               </a>
            </div>
         </div>
      </div>
   );
}
export default ShareModal()